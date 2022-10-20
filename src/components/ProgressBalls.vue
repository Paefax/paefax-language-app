<template>
  <section class="dot-container">
    <span v-for="answer in quiz.answeredQuestions">
      <CheckCircleOutline v-if="answer" fillColor="green" size="35px" />
      <CloseCircleOutline v-else="!answer" fillColor="red" size="35px" />
    </span>

    <CheckboxBlankCircle v-for="dot in remainingQuestions" size="35px" />
  </section>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { computed } from "vue";
import CheckCircleOutline from "vue-material-design-icons/CheckCircleOutline.vue";
import CloseCircleOutline from "vue-material-design-icons/CloseCircleOutline.vue";
import CheckboxBlankCircle from "vue-material-design-icons/CheckboxBlankCircle.vue";

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

@media only screen and (min-width: 769px) {
  .dot-container {
    margin-bottom: 50px;
  }
}
</style>
