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
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";

const quiz = useQuizStore();

const remainingQuestions = computed(() => {
  return quiz.numberOfQuestions - quiz.answeredQuestions.length;
});
</script>

<style scoped>
.dot-container {
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 20px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

/* kebab-casing does not work here */
.dotFail {
  background: red;
}
.dotSuccess {
  background: green;
}
</style>
