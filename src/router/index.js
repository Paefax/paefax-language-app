import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingView from "../views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: HomeView,
    },
  ],
});

export default router;
