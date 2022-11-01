import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const originalCategory = ref("");
  const category = ref("");
  const originalLanguage = ref("");
  const language = ref("");
  const originalQuestions = ref([]);
  const questions = ref([]);
  const idCurrentQuestion = ref(0);
  const numberOfQuestions = ref(0);
  const score = ref(0);
  const answers = ref([]);
  const answeredQuestions = ref([]);
  const resetQuestions = ref(true);
  const answerChosen = ref(false);

  const setResetQuestions = (boolean) => {
    resetQuestions.value = boolean;
  };

  const getAnswers = () => {
    return answers.value;
  };

  const setNumberOfQuestions = (number) => {
    numberOfQuestions.value = number;
  };

  const resetProgressBalls = () => {
    answeredQuestions.value = [];
  };

  const resetQuizProgress = () => {
    idCurrentQuestion.value = 0;
    score.value = 0;
    answers.value = [];
    answeredQuestions.value = [];
  };

  const registerAnswer = (answerSuccess, answer) => {
    answeredQuestions.value.push(answerSuccess);
    answers.value.push(answer);
  };

  const setQuestions = (newQuestions) => {
    questions.value = JSON.parse(JSON.stringify(newQuestions));
    originalQuestions.value = JSON.parse(JSON.stringify(newQuestions));
  };

  const setCategory = (categoryName) => {
    category.value = categoryName.toLowerCase();
  };

  const setOriginalCategory = (categoryName) => {
    originalCategory.value = categoryName.toLowerCase();
  };

  const setLanguage = (languageName) => {
    language.value = languageName.toLowerCase();
  };

  const setOriginalLanguage = (languageName) => {
    originalLanguage.value = languageName.toLowerCase();
  };

  const nextQuestion = () => {
    idCurrentQuestion.value++;
    answerChosen.value = false;
  };

  const getCurrentQuestion = () => {
    if (idCurrentQuestion.value < numberOfQuestions.value) {
      return questions.value[idCurrentQuestion.value];
    } else {
      resetQuizProgress();
      return questions.value[0];
    }
  };

  const increaseScore = () => {
    score.value++;
  };

  const setAnswerChosen = (boolean) => (answerChosen.value = boolean);

  return {
    questions,
    nextQuestion,
    getCurrentQuestion,
    category,
    idCurrentQuestion,
    numberOfQuestions,
    setQuestions,
    setCategory,
    score,
    increaseScore,
    answeredQuestions,
    registerAnswer,
    resetProgressBalls,
    resetQuizProgress,
    getAnswers,
    answers,
    resetQuestions,
    setResetQuestions,
    originalQuestions,
    setNumberOfQuestions,
    language,
    setLanguage,
    originalCategory,
    originalLanguage,
    setOriginalCategory,
    setOriginalLanguage,
    answerChosen,
    setAnswerChosen,
  };
});
