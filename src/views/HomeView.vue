<template>
  <h1>Fruit</h1>
  <p>Pineapple</p>
  <AnswerItems :answers="answers" />
  <p>This was correct</p>
  <button>Next question</button>
</template>

<script setup>
import AnswerItems from "../components/AnswerItems.vue";
import { ref, onBeforeMount } from "vue";
const answers = ref([]);

onBeforeMount(() => {
  answers.value = answers.value = [...answers.value, "banan"];
  answers.value = answers.value = [...answers.value, "ananas"];
  answers.value = answers.value = [...answers.value, "äpple"];
});
</script>
