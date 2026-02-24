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
  // ...
  // explicitly return false to cancel the navigation
  return false;
});

export default router;
