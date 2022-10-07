import { createRouter, createWebHistory } from "vue-router";
import QuizView from "../views/QuizView.vue";
import LanguageView from "../views/LanguageView.vue";
import LandingView from "../views/LandingView.vue";
import CategoryView from "../views/CategoryView.vue";

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
      component: QuizView,
    },
    {
      path: "/language",
      name: "language",
      component: LanguageView,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView,
    },
  ],
});

export default router;
