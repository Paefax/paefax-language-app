import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const defaultQuestions = ref([]);
  const questions = ref([]);
  const category = ref("");
  const idCurrentQuestion = ref(0);
  const numberOfQuestions = computed(() => questions.value.length);
  const wrongAnsweredQuestions = ref([]);

  const setQuestions = (newQuestions) => {
    questions.value = JSON.parse(JSON.stringify(newQuestions));
    wrongAnsweredQuestions.value = [];
  };

  const setDefaultQuestions = (questions) => {
    defaultQuestions.value = questions;
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

  const removeQuestion = (question) => {
    const index = wrongAnsweredQuestions.value.findIndex(
      (entry) => entry.id === question.id
    );

    if (index >= 0) {
      wrongAnsweredQuestions.value.splice(index, 1);
    }
  };

  const resetToDefault = () => {
    setQuestions(defaultQuestions.value);
    idCurrentQuestion.value = 0;
    wrongAnsweredQuestions.value = [];
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
    removeQuestion,
    defaultQuestions,
    setDefaultQuestions,
    resetToDefault,
  };
});
