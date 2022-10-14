<template>
  <section class="dot-container">
    <span v-for="defineDots in defineDots" class="dot">{{
      amountOfBalls
    }}</span>
  </section>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import AnswerItems from "../components/AnswerItems.vue";
import { onMounted, ref } from "vue";

const quiz = useQuizStore();

const defineDots = quiz.numberOfQuestions;

const setColor = computed({
  //Get colors
  //Return reactive ref
  //Set colors
});
</script>

<style scoped>
.dot-container {
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 20px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
