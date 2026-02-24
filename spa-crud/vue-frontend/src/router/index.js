import {createWebHistory, createRouter} from "vue-router";
import routes from "./routes";
import {useAuth} from "../stores/auth";

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Mengganti default class : router-link-exact-active menjadi class active
  // linkActiveClass: "active",
});

// Navigation guard
router.beforeEach(async (to, from) => {
  const store = useAuth();
  await store.fetchUser();
  if (to.meta.auth && !store.isLogged) {
    return {
      name: "login",
    };
  }
});

export default router;
