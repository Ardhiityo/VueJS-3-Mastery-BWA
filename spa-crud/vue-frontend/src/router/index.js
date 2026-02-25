import {createWebHistory, createRouter} from "vue-router";
import routes from "./routes";
import {useAuth} from "../stores/auth";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Mengganti default class : router-link-exact-active menjadi class active
  // linkActiveClass: "active",
});

// Navigation guard
router.beforeEach(async (to, from) => {
  const useAuthStore = useAuth();

  const {isLogged} = storeToRefs(useAuthStore);
  
  await useAuthStore.fetchUser();
  
  if (to.meta.auth) {
    if (!isLogged.value) {
      return {
        name: "login",
      };
    }
  }
  
  if (to.meta.guest && isLogged.value) {
    return {
      name: "task",
    };
  }
});

export default router;
