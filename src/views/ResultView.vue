<template>
  <main>
    <QuizResult />
    <button class="button2">Take new quiz</button>
    <RouterLink to="/category">
      <button class="button1">Change category</button>
    </RouterLink>
    <RouterLink to="/language">
      <button class="button1">Change language</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { onUnmounted } from "vue";
import QuizResult from "../components/QuizResult.vue";
import { useQuizStore } from "@/stores/quiz";
import { useTheme } from "../stores/theme";

const theme = useTheme();

const quiz = useQuizStore();

onUnmounted(() => {
  quiz.resetProgressBalls();
  quiz.resetQuizProgress();
  quiz.setResetQuestions(true);
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  padding: 0;
}

button {
  border-radius: 10px;
  cursor: pointer;
  font-size: large;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  transition: all 0.3s;
  border: 1px solid;
  border-color: v-bind("theme.theme.fieldColor");
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
}

.button1 {
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");

  font-weight: 500;
}

.button2 {
  color: v-bind("theme.theme.color");
  color: black;
  font-weight: 500;
}

button:hover {
  transform: translateY(4px);
  cursor: pointer;
}

.button2:hover {
  transform: translateY(4px);
  cursor: pointer;
}

.button1:hover {
  transform: translateY(4px);
  cursor: pointer;
}

@media only screen and (min-width: 769px) {
  button {
    border-radius: 10px;
    font-size: 25px;
    width: 300px;
    height: 60px;
    margin-top: 15px;
  }
}
</style>
