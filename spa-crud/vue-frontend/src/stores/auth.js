import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {csrfCookie, getUser, login, logout, register} from "../http/auth-api";

export const useAuth = defineStore("useAuth", () => {
  const user = ref(null);

  const isLogged = computed(() => (user.value ? true : false));
  const errors = ref({});

  const fetchUser = async () => {
    try {
      const response = await getUser();
      user.value = response.data;
    } catch (error) {
      user.value = null; 
    }
  };

  const handleLogin = async (credentials) => {
    try {
      await csrfCookie();
      const {data} = await login({
        email: credentials.email,
        password: credentials.password,
      });
      user.value = data.user;
      return true;
    } catch (error) {
      // response hasil dari object axios 
      errors.value = error.response.data.errors;
      return false; 
    }
  };

  const handleRegister = async (user) => {
    const registerResponse = await register({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    const loginResponse = await login(user);
    if (registerResponse.status === 200 && loginResponse.status === 200) {
      user.value = registerResponse.data.user;
      return true;
    }
    return false;
  };

  const handleLogout = async () => {
    const response = await logout();
    if (response.status === 200) {
      user.value = null;
      return true;
    }
    return false;
  };

  return {
    fetchUser,
    handleLogin,
    handleLogout,
    handleRegister,
    isLogged,
    user,
    errors
  };
});
