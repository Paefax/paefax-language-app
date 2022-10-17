<template>
  <p>{{ answers }}</p>
  <p>{{ correctAnswer }}</p>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
const quiz = useQuizStore();
const answers = quiz.answers;
const correctAnswers = quiz.questions.correctAnswer;
const words = quiz.questions.word;

/*
const overview = [];
for(let i = 0; i<4;i++){
    overview.push({
        answer : answers[i], 
        correctAnswer : correctAnswers[i],
        word : words[i]
    })
}
*/
</script>
