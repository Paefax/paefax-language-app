<template>
  <main>
    <ProgressBalls />
    <h1>
      {{ quiz.category.charAt(0).toUpperCase() + quiz.category.slice(1) }}
    </h1>
    <h2>
      {{ wordToTranslate.charAt(0).toUpperCase() + wordToTranslate.slice(1) }}
    </h2>

    <AnswerItems
      v-if="!answeredQuestion"
      @button-clicked="checkAnswer"
      :answers="answers"
    />

    <!--     <UserInputQuiz
      v-if="!answeredQuestion"
      @checkInputAnswer="checkInputAnswer"
      :input="input"
    /> -->

    <span v-if="answeredQuestion">Your answer: </span>
    <h4 v-if="answeredQuestion">
      {{ currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1) }}
    </h4>
    <p v-if="answeredCorrectly && answeredQuestion">Correct answer!</p>
    <p v-else-if="answeredQuestion && !answeredCorrectly">Wrong answer!</p>
    <button v-show="answeredQuestion" @click.prevent="nextQuestion">
      Next question
    </button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useQuizStore } from "@/stores/quiz";
import AnswerItems from "../components/AnswerItems.vue";
import ProgressBalls from "../components/ProgressBalls.vue";
import router from "../router/index";
import { useGeneralStore } from "@/stores/general";
import UserInputQuiz from "./UserInputQuiz.vue";

const general = useGeneralStore();
const quiz = useQuizStore();

const answers = ref([]);
const wordToTranslate = ref("");
const correctAnswer = ref("");
const currentQuestion = ref();
const answeredQuestion = ref(false);
const answeredCorrectly = ref(false);
const currentAnswer = ref("");
const input = ref("");

const checkAnswer = (answer) => {
  answeredQuestion.value = true;
  currentAnswer.value = answer;

  if (answer === correctAnswer.value) {
    answeredCorrectly.value = true;
    quiz.increaseScore();
  } else {
    answeredCorrectly.value = false;
  }

  quiz.registerAnswer(answeredCorrectly.value, answer);
};

const checkInputAnswer = (input) => {
  answeredQuestion.value = true;
  currentAnswer.value = input;

  if (input === correctAnswer.value) {
    answeredCorrectly.value = true;
    quiz.increaseScore();
  } else {
    answeredCorrectly.value = false;
  }

  quiz.registerAnswer(answeredCorrectly.value, input);
};

const setQuestionInfo = () => {
  currentQuestion.value = quiz.getCurrentQuestion();
  wordToTranslate.value = currentQuestion.value.word;
  correctAnswer.value = currentQuestion.value.correctAnswer;

  answers.value = [];

  answers.value.push(currentQuestion.value.correctAnswer);
  answers.value.push(currentQuestion.value.incorrectAnswers[0]);
  answers.value.push(currentQuestion.value.incorrectAnswers[1]);

  shuffleAnswers(answers.value);
};

const shuffleAnswers = (answers) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
};

const nextQuestion = () => {
  let noMoreQuestions = !(quiz.idCurrentQuestion < quiz.numberOfQuestions - 1);
  quiz.nextQuestion();

  if (noMoreQuestions) {
    quiz.resetProgressBalls();
    router.push("/result");
  } else {
    setQuestionInfo();
    answeredQuestion.value = false;
  }
};

onMounted(() => {
  let url = `http://localhost:3000/${general.getCategory()}/${general.getLanguage()}`;
  fetch(url)
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

button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2em;
  border: 1px solid black;
  cursor: pointer;
  margin-top: 50px;
}

span {
  font-size: 0.9em;
  margin-top: 10px;
}

h4 {
  margin-top: 10px;
}

@media only screen and (min-width: 769px) {
  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.5em;
  }

  button {
    width: 200px;
    height: 65px;
    border-radius: 15px;
    font-size: 1.5em;
  }

  span {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.5em;
  }
}
</style>
