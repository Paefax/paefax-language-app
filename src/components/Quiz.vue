<template>
  <main>
    <ProgressBalls />
    <h1>
      {{ quiz.category.charAt(0).toUpperCase() + quiz.category.slice(1) }}
    </h1>
    <h2>
      {{ wordToTranslate.charAt(0).toUpperCase() + wordToTranslate.slice(1) }}
    </h2>

    <div v-if="progress >= 50">
      <UserInputQuiz
        v-if="!answeredQuestion"
        @checkInputAnswer="checkInputAnswer"
        :input="input"
      />
      <div class="show-answer" v-if="answeredQuestion && answeredCorrectly">
        <span>Correct!</span>
        <h4>
          {{ currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1) }}
          <CheckBold fillColor="#11814B" class="check-bold" />
        </h4>
      </div>
      <h4
        class="show-wrong-answer"
        v-if="answeredQuestion && !answeredCorrectly"
      >
        {{ currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1) }}
        <CloseThick fillColor="#ff0000" class="close-thick" />
      </h4>
      <div
        class="show-correct-answer"
        v-if="!answeredCorrectly && answeredQuestion"
      >
        Correct answer:
        <h4>
          {{ correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1) }}
        </h4>
      </div>
    </div>
    <div v-else>
      <AnswerItems @button-clicked="checkAnswer" :answers="answers" />
    </div>
    <button
      v-show="
        answeredQuestion &&
        !(quiz.idCurrentQuestion === quiz.numberOfQuestions - 1)
      "
      @click.prevent="nextQuestion"
    >
      Next question
    </button>

    <button
      v-if="
        answeredQuestion &&
        quiz.idCurrentQuestion === quiz.numberOfQuestions - 1
      "
      @click.prevent="showResult"
    >
      Show result
    </button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useQuizStore } from "@/stores/quiz";
import { useUserStore } from "@/stores/user";
import AnswerItems from "../components/AnswerItems.vue";
import ProgressBalls from "../components/ProgressBalls.vue";
import router from "../router/index";
import UserInputQuiz from "./UserInputQuiz.vue";
import CloseThick from "vue-material-design-icons/CloseThick.vue";
import CheckBold from "vue-material-design-icons/CheckBold.vue";

const quiz = useQuizStore();
const user = useUserStore();

const answers = ref([]);
const wordToTranslate = ref("");
const correctAnswer = ref("");
const currentQuestion = ref();
const answeredQuestion = ref(false);
const answeredCorrectly = ref(false);
const currentAnswer = ref("");
const input = ref("");
const progress = ref(
  user.progress
    .filter(
      (obj) => obj.language === quiz.language && obj.category === quiz.category
    )
    .map((obj) => obj.progress)
);

const checkAnswer = (answer) => {
  if (answeredQuestion.value === false) {
    answeredQuestion.value = true;
    currentAnswer.value = answer;

    if (answer === correctAnswer.value) {
      answeredCorrectly.value = true;
      quiz.increaseScore();
    } else {
      answeredCorrectly.value = false;
    }

    quiz.registerAnswer(answeredCorrectly.value, answer);
  }
};

const checkInputAnswer = (input) => {
  answeredQuestion.value = true;
  currentAnswer.value = input.toLowerCase();

  if (input.toLowerCase() === correctAnswer.value.toLowerCase()) {
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

  if (currentQuestion.value.incorrectAnswers !== undefined) {
    answers.value.push(currentQuestion.value.incorrectAnswers[0]);
    answers.value.push(currentQuestion.value.incorrectAnswers[1]);
  }

  shuffleAnswers(answers.value);
};

const shuffleAnswers = (answers) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
};

const nextQuestion = () => {
  quiz.nextQuestion();
  setQuestionInfo();
  answeredQuestion.value = false;
};

const showResult = () => {
  router.push("/result");
  quiz.setAnswerChosen(false);
};

onMounted(() => {
  if (
    quiz.resetQuestions ||
    quiz.category != quiz.originalCategory ||
    quiz.language != quiz.originalLanguage
  ) {
    let url = "";

    if (quiz.isUserQuiz === true) {
      url = `http://localhost:3000/user/quiz/get/${quiz.quizId}`;
    } else {
      url = `http://localhost:3000/${quiz.category}/${quiz.language}`;
    }

    fetch(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (quiz.isUserQuiz === true) {
          quiz.setQuestions(JSON.parse(data[0].questions));
          quiz.setNumberOfQuestions(JSON.parse(data[0].questions).length);
          progress.value = 100;
        } else {
          quiz.setQuestions(data.questions);
          quiz.setNumberOfQuestions(data.questions.length);
        }

        quiz.setOriginalLanguage(quiz.language);
        quiz.setOriginalCategory(quiz.category);

        quiz.resetProgressBalls();
        quiz.resetQuizProgress();
        quiz.setResetQuestions(false);

        setQuestionInfo();
      });
  } else {
    quiz.setQuestions(quiz.originalQuestions);
    quiz.resetProgressBalls();
    quiz.resetQuizProgress();
    setQuestionInfo();
    quiz.setAnswerChosen(false);
  }
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
  margin-top: 30px;
}

button:hover {
  transform: translateY(4px);
  cursor: pointer;
}

span {
  font-size: 0.9em;
  margin-top: 10px;
}

h4 {
  margin-top: 8px;
}

.show-correct-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-wrong-answer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.show-answer {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.check-bold {
  padding-left: 5px;
  padding-bottom: 6px;
}

.close-thick {
  padding-left: 5px;
  padding-bottom: 5px;
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
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.5em;
  }

  .show-correct-answer {
    font-size: 1.2em;
  }
}
</style>
