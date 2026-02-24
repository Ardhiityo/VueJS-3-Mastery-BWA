import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import TaskPage from "../pages/TaskPage.vue";
import SummaryPage from "../pages/SummaryPage.vue";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/tasks",
    name: "task",
    component: TaskPage,
  },
  {
    path: "/summaries",
    name: "summary",
    component: SummaryPage,
  },
  {
    path: "/:pathMatch",
    name: "error.404",
    component: NotFoundErrorPage,
  },
];

export default routes;
