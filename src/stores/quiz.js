import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const category = ref("");
  const questions = ref([]);
  const idCurrentQuestion = ref(0);
  const numberOfQuestions = computed(() => questions.value.length);
  const wrongAnsweredQuestions = ref([]);

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
      return questions.value[0];
    }
  };

  const addQuestion = (question) => {
    if (wrongAnsweredQuestions.value.length < numberOfQuestions.value) {
      wrongAnsweredQuestions.value.push(question);
    } else {
      wrongAnsweredQuestions.value = [];
      wrongAnsweredQuestions.value.push(question);
    }
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
    wrongAnsweredQuestions,
    addQuestion,
  };
});
