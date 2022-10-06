import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LanguageView from "../views/LanguageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/language",
      name: "language",
      component: LanguageView,
    },
  ],
});

export default router;
