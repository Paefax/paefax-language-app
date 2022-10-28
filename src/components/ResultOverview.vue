<template>
  <table class="content-table">
    <thead>
      <tr>
        <th>Word</th>
        <th>Your answer</th>
        <th>Correct answer</th>
      </tr>
    </thead>
    <tbody>
      <ResultOverviewItem v-for="(result, index) in results" :key="index" :info="result" />
    </tbody>
  </table>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import ResultOverviewItem from "./ResultOverviewItem.vue";
import { onMounted, ref } from "vue";
import { useTheme } from "../stores/theme";

const theme = useTheme();

const quiz = useQuizStore();
const answers = quiz.answers;
const questions = quiz.questions;
const results = ref([]);

onMounted(() => {
  for (let i = 0; i < questions.length; i++) {
    results.value.push({
      word: questions[i].word,
      answer: answers[i],
      correctAnswer: questions[i].correctAnswer,
    });
  }
});
</script>

<style scoped>
.content-table {
  margin: 25px 0;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background: white;
  color: black;
  max-width: 90%;
  margin-bottom: 40px;
}

.content-table thead tr {
  background-color: v-bind('theme.theme.footerBackgroundColor');
  color: v-bind('theme.theme.color');
  text-align: center;
}

.content-table th,
.content-table td {
  padding: 12px 25px;
  text-align: center;

}

@media only screen and (min-width: 769px) {
  .content-table {
    margin-bottom: 70px;
  }

  th {
    font-size: 1.5em;
  }
}
</style>
