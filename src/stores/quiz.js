import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const category = ref("");
  const questions = ref([]);
  const idCurrentQuestion = ref(0);
  const numberOfQuestions = computed(() => questions.value.length);
  const score = ref(0);

  const answeredQuestions = ref([]);

  const registerAnswer = (answerSuccess) => {
    answeredQuestions.value.push(answerSuccess);
  };

  const setQuestions = (newQuestions) => {
    questions.value = newQuestions;
  };

  const setCategory = (categoryName) => {
    category.value = categoryName;
  };

  const nextQuestion = () => {
    idCurrentQuestion.value++;
  };

  const getCurrentQuestion = () => {
    if (idCurrentQuestion.value < numberOfQuestions.value) {
      return questions.value[idCurrentQuestion.value];
    } else {
      idCurrentQuestion.value = 0;
      score.value = 0;
      return questions.value[0];
    }
  };
  // Reset the quiz. Clear score and questions.

  const increaseScore = () => {
    score.value++;
  };

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
  };
});
