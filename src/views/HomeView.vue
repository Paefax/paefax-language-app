<template>
  <h1>{{ category }}</h1>
  <p>{{ wordToTranslate }}</p>
  <AnswerItems @button-clicked="checkAnswer" :answers="answers" />
  <p v-if="answeredCorrectly && answeredQuestion">Correct answer!</p>
  <p v-else-if="answeredQuestion && !answeredCorrectly">Wrong answer</p>
  <button v-show="answeredQuestion" @click.prevent="nextQuestion">
    Next question
  </button>
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

const nextQuestion = () => {
  wordToTranslate.value = "Pear";
  correctAnswer.value = "päron";
  answers.value = [];
  answers.value = [...answers.value, "mango"];
  answers.value = [...answers.value, "päron"];
  answers.value = [...answers.value, "jordgubbe"];
  answeredQuestion.value = false;
  answeredCorrectly.value = false;
};

onBeforeMount(() => {
  category.value = "Fruit";
  wordToTranslate.value = "Pineapple";
  answers.value = [...answers.value, "banan"];
  answers.value = [...answers.value, "ananas"];
  answers.value = [...answers.value, "äpple"];
  correctAnswer.value = "ananas";
});
</script>
