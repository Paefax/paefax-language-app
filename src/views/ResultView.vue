<template>
  <main>
    <h1>You finished the quiz!</h1>
    <h2>Score: {{ quiz.score }} / {{ quiz.numberOfQuestions }}</h2>
    <ResultsChart />
    <h1>Good job!</h1>
    <button class="button2">Take new quiz</button>
    <RouterLink to="/category">
      <button class="button1">Change category</button>
    </RouterLink>
    <RouterLink to="/language">
      <button class="button1">Change language</button>
    </RouterLink>
    <RouterLink to="/account">
      <button class="button3">Account</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import ResultsChart from "../components/ResultsChart.vue";

const quiz = useQuizStore();
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button1 {
  background: #185359;
  color: #fff;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  line-height: 1.5;
  padding: 14px 40px;
  transition: all 0.3s;
}
.button3 {
  background: #fff;
  color: black;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  height: 50px;
  line-height: 1.5;
  padding: 15px;
  transition: all 0.3s;
}

.button2 {
  background: #fff;
  color: black;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  line-height: 1.5;
  padding: 14px 40px;
  transition: all 0.3s;
}
</style>
