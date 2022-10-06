import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const category = "fruit";
  const questions = [
    {
      id: 1,
      word: "apple",
      correctAnswer: "äpple",
      incorrectAnswers: [
        {
          word: "ananas",
        },
        {
          word: "kiwi",
        },
      ],
    },
    {
      id: 2,
      word: "pear",
      correctAnswer: "päron",
      incorrectAnswers: [
        {
          word: "äpple",
        },
        {
          word: "mango",
        },
      ],
    },
    {
      id: 3,
      word: "pineapple",
      correctAnswer: "ananas",
      incorrectAnswers: [
        {
          word: "mango",
        },
        {
          word: "jordgubbe",
        },
      ],
    },
  ];
  const idCurrentQuestion = ref(0);
  const numberOfQuestions = questions.length;

  const nextQuestion = () => {
    idCurrentQuestion.value += 1;
  };

  const getCurrentQuestion = () => {
    return questions[idCurrentQuestion.value];
  };

  return {
    questions,
    nextQuestion,
    getCurrentQuestion,
    category,
    idCurrentQuestion,
    numberOfQuestions,
  };
});
