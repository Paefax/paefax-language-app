<template>
  <section class="dot-container">
    <span v-for="answer in quiz.answeredQuestions">
      <CheckCircleOutline v-if="answer" fillColor="#11814B" :size="35" />

      <CloseCircleOutline v-else="!answer" fillColor="#FF0000" :size="35" />
    </span>

    <CheckboxBlankCircle v-for="dot in remainingQuestions" :size="35" />
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
.material-design-icon__svg {
  background-color: white;
  border-radius: 50%;
}

@media only screen and (min-width: 769px) {
  .dot-container {
    margin-bottom: 50px;
  }
}
</style>
