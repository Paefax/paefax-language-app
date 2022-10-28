<template>
  <h1>Good job!</h1>
  <h2>You finished the quiz</h2>
  <h3>Score: {{ quiz.score }} / {{ quiz.numberOfQuestions }}</h3>
  <ResultOverview />
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { useUserStore } from "@/stores/user";
import { useGeneralStore } from "@/stores/general";
import { onMounted } from "vue";
import ResultOverview from "./ResultOverview.vue";


const quiz = useQuizStore();
const user = useUserStore();
const general = useGeneralStore();



const increaseScore = () => {
  if (quiz.score >= 4) {
    user.increaseProgress(general.getLanguage(), general.getCategory());
  }
};

onMounted(() => {
  increaseScore();
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
