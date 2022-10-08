<template>
  <main>
    <h1>Good job!</h1>
    <h2>You finished the quiz</h2>
    <RouterLink to="/retake" v-if="canRetake">
      <button>Retake</button>
    </RouterLink>
    <RouterLink to="/">
      <button @click="resetDefault()">Home</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";

const quiz = useQuizStore();

const canRetake = quiz.wrongAnsweredQuestions.length > 0 ? true : false;

const resetDefault = () => {
  quiz.resetToDefault();
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
