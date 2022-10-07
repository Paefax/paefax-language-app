<template>
  <div v-for="(answer, index) in props.answers" :key="index">
    <AnswerItem @button-clicked="buttonClicked" :answer="answer" />
  </div>
</template>

<script setup>
import AnswerItem from "./AnswerItem.vue";

const props = defineProps({
  answers: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(["button-clicked"]);

const buttonClicked = (answer) => {
  emits("button-clicked", answer);
};
</script>
