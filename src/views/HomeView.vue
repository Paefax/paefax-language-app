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
import { useQuizStore } from "@/stores/quiz";
const answers = ref([]);
const wordToTranslate = ref("");
const category = ref("");
const quiz = useQuizStore();
const correctAnswer = ref("");
const currentQuestion = ref(Object);

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

const setQuestionInfo = () => {
  wordToTranslate.value = currentQuestion.value.word;
  correctAnswer.value = currentQuestion.value.correctAnswer;
  answers.value = [];
  answers.value = [...answers.value, currentQuestion.value.correctAnswer];
  answers.value = [
    ...answers.value,
    currentQuestion.value.incorrectAnswers[0].word,
  ];
  answers.value = [
    ...answers.value,
    currentQuestion.value.incorrectAnswers[1].word,
  ];
};

const nextQuestion = () => {
  if (quiz.idCurrentQuestion < quiz.numberOfQuestions - 1) {
    quiz.nextQuestion();
    currentQuestion.value = quiz.getCurrentQuestion();
    setQuestionInfo();

    answeredQuestion.value = false;
    answeredCorrectly.value = false;
  } else {
    // Here we will send the user to the finish/result page.
    console.log("done");
  }
};

onBeforeMount(() => {
  //Set information about quiz (Now hard coded in quiz.js)
  category.value = quiz.category;

  //Set first question
  currentQuestion.value = quiz.getCurrentQuestion();
  setQuestionInfo();
});
</script>
