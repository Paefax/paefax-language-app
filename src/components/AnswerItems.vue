<template>
  <div v-for="(answer, index) in props.answers" :key="index">
    <AnswerItem :answer="answer" />
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
</script>
