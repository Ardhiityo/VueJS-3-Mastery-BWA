import {createWebHistory, createRouter} from "vue-router";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Mengganti default class : router-link-exact-active menjadi class active
  // linkActiveClass: "active",
});

export default router;
