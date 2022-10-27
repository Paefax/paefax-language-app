<template>
  <button
    @click.prevent="$emit('button-clicked', props.answer)"
    :class="{
      correctHighlight: props.answer === correctAnswer && quiz.answerChosen,
      incorrectHighlight:
        props.answer !== correctAnswer && quiz.answerChosen === props.answer,
    }"
  >
    {{ props.answer.charAt(0).toUpperCase() + props.answer.slice(1) }}
  </button>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { computed } from "vue";

const quiz = useQuizStore();

const emits = defineEmits(["button-clicked"]);

console.log(props.chosenAnswer);

const buttonClicked = () => {
  emits("button-clicked", props.answer);
};

const correctAnswer = computed(() => {
  return quiz.questions.find(
    (question) => question.id === quiz.idCurrentQuestion
  ).correctAnswer;
});

const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2em;
  background-color: #185359;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  margin-top: 8px;
}

.correctHighlight {
  border: 5px solid green;
}

.incorrectHighlight {
  border: 5px solid red;
}
@media only screen and (min-width: 769px) {
  button {
    width: 250px;
    height: 75px;
    border-radius: 15px;
    font-size: 2em;
  }
}
</style>
