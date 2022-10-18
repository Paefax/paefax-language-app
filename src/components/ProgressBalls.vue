<template>
  <section class="dot-container">
    <span
      v-for="answer in quiz.answeredQuestions"
      :class="{ dotFail: !answer, dotSuccess: answer }"
      class="dot"
    ></span>

    <span v-for="dot in remainingQuestions" class="dot"></span>
  </section>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { computed } from "vue";

const quiz = useQuizStore();

const remainingQuestions = computed(
  () => quiz.numberOfQuestions - quiz.answeredQuestions.length
);
</script>

<style scoped>
.dot-container {
  display: flex;
  margin-top: 15px;
  margin-bottom: 50px;
  gap: 20px;
}

.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.dotFail {
  background: red;
}
.dotSuccess {
  background: green;
}

@media only screen and (min-width: 769px) {
  .dot-container {
    margin-bottom: 50px;
  }

  .dot {
    height: 20px;
    width: 20px;
  }
}
</style>
