import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {csrfCookie, getUser, login, logout, register} from "../http/auth-api";

export const useAuth = defineStore("useAuth", () => {
  const user = ref(null);

  const isLogged = computed(() => (user.value ? true : false));

  const fetchUser = async () => {
    const response = await getUser();
    if (response.status === 200) {
      user.value = response.data;
    }
  };

  const handleLogin = async (credentials) => {
    const csrfResponse = await csrfCookie();
    const loginResponse = await login({
      email: credentials.email,
      password: credentials.password,
    });
    if (loginResponse.status === 200 && csrfResponse.status === 204) {
      user.value = loginResponse.data.user;
      return true;
    }
    return false;
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
    user
  };
});
