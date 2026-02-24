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
  if (to.meta.auth) {
    const {fetchUser, isLogged} = useAuth();
    await fetchUser();
    console.log(isLogged);
    console.log(isLogged.value);
    if (!isLogged.value) {
      return {
        name: "login",
      };
    }
  }
});

export default router;
