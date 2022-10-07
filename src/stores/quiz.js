import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const category = ref("fruit");
  const questions = ref([]);
  const idCurrentQuestion = ref(0);
  const numberOfQuestions = computed(() => questions.value.length);

  const setQuestions = (newQuestions) => {
    questions.value = newQuestions;
  };

  const nextQuestion = () => {
    idCurrentQuestion.value++;
  };

  const getCurrentQuestion = () => {
    return questions.value[idCurrentQuestion.value];
  };

  return {
    questions,
    nextQuestion,
    getCurrentQuestion,
    category,
    idCurrentQuestion,
    numberOfQuestions,
    setQuestions,
  };
});
