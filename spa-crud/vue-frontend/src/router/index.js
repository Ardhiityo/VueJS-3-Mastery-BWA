import {createWebHistory, createRouter} from "vue-router";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Mengganti default class : router-link-exact-active menjadi class active
  // linkActiveClass: "active",
});

// Navigation guard
router.beforeEach((to, from) => {
  // if (to.meta.auth) {
  //   return {
  //     name: "login",
  //   };
  // }
});

export default router;
