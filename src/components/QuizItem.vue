<template>
  <main>
    <h1>{{ quiz.category }}</h1>
    <p>{{ wordToTranslate }}</p>
    <AnswerItems @button-clicked="checkAnswer" :answers="answers" />
    <p v-if="answeredCorrectly && answeredQuestion">Correct answer!</p>
    <p v-else-if="answeredQuestion && !answeredCorrectly">Wrong answer</p>
    <button v-show="answeredQuestion" @click.prevent="nextQuestion">
      Next question
    </button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useQuizStore } from "@/stores/quiz";
import AnswerItems from "../components/AnswerItems.vue";
import router from "../router/index";

const quiz = useQuizStore();

const answers = ref([]);
const wordToTranslate = ref("");
const correctAnswer = ref("");
const currentQuestion = ref();
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
  currentQuestion.value = quiz.getCurrentQuestion();
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
  let noMoreQuestions = !(quiz.idCurrentQuestion < quiz.numberOfQuestions - 1);
  quiz.nextQuestion();

  if (noMoreQuestions) {
    router.push("/result");
  } else {
    setQuestionInfo();
    answeredQuestion.value = false;
  }
};

onMounted(() => {
  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      quiz.setQuestions(data.questions);
      quiz.setCategory(data.category);
      setQuestionInfo();
    });
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
