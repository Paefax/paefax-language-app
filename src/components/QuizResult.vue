<template>
  <h1>Good job!</h1>
  <h2>You finish the quiz</h2>
  <h3>Score: {{ quiz.score }} / {{ quiz.numberOfQuestions }}</h3>
  <ResultOverview />
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import ResultOverview from "./ResultOverview.vue";

const quiz = useQuizStore();
</script>
