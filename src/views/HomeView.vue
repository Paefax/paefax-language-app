<template>
  <h1>{{ category }}</h1>
  <p>{{ wordToTranslate }}</p>
  <AnswerItems @button-clicked="checkAnswer" :answers="answers" />
  <p v-if="answeredCorrectly && answeredQuestion">Correct answer!</p>
  <p v-else-if="answeredQuestion && !answeredCorrectly">Wrong answer</p>
  <button v-show="answeredQuestion">Next question</button>
</template>

<script setup>
import AnswerItems from "../components/AnswerItems.vue";
import { ref, onBeforeMount } from "vue";
const answers = ref([]);
const wordToTranslate = ref("");
const category = ref("");

const correctAnswer = ref("");

const answeredQuestion = ref(false);
const answeredCorrectly = ref(false);

const checkAnswer = (answer) => {
  answeredQuestion.value = true;

  if (answer === correctAnswer.value) {
    answeredCorrectly.value = true;
  } else {
    answeredCorrectly.value = false;
  }
};

onBeforeMount(() => {
  wordToTranslate.value = "Pineapple";
  category.value = "Fruit";
  answers.value = [...answers.value, "banan"];
  answers.value = [...answers.value, "ananas"];
  answers.value = [...answers.value, "äpple"];
  correctAnswer.value = "ananas";
});
</script>
