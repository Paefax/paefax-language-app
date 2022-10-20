import { createRouter, createWebHistory } from "vue-router";
import QuizView from "../views/QuizView.vue";
import LanguageView from "../views/LanguageView.vue";
import LandingView from "../views/LandingView.vue";
import CategoryView from "../views/CategoryView.vue";
import ResultView from "../views/ResultView.vue";
import SettingsView from "../views/SettingsView.vue";
import AccountView from "../views/AccountView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";

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
    {
      path: "/result",
      name: "result",
      component: ResultView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
  ],
});

export default router;
