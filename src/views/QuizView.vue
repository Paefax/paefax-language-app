<template>
  <main>
    <h1>{{ category }}</h1>
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
import AnswerItems from "../components/AnswerItems.vue";
import { ref, onMounted } from "vue";
import { useQuizStore } from "@/stores/quiz";
import router from "../router/index";

const answers = ref([]);
const wordToTranslate = ref("");
const category = ref("");
const quiz = useQuizStore();
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
  if (noMoreQuestions) {
    router.push("/result");
  } else {
    quiz.nextQuestion();
    setQuestionInfo();
    answeredQuestion.value = false;
  }
};

onMounted(() => {
  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      quiz.setQuestions(data.questions); // Put questions for this quiz in the quiz store
      category.value = quiz.category; //Set category - same for entire quiz
      setQuestionInfo(); //Set first question
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
