<template>
  <h1>Good job!</h1>
  <h2>You finished the quiz</h2>
  <h3>Score: {{ quiz.score }} / {{ quiz.numberOfQuestions }}</h3>
  <ResultOverview />
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { useUserStore } from "@/stores/user";
import { onMounted, computed } from "vue";
import ResultOverview from "./ResultOverview.vue";


const quiz = useQuizStore();
const userInfo = useUserStore();
const loggedIn = computed(() => userInfo.loggedIn);



const increaseScore = () => {
  if (quiz.score >= 4) {
    userInfo.increaseScoreInDB(quiz.language, quiz.category);
  }
};

onMounted(() => {
  if (loggedIn.value) {
    increaseScore();
  }
});
</script>

<style scoped>
@media only screen and (min-width: 769px) {
  h1 {
    font-size: 3em;

  }

  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 2em;
  }
}
</style>
