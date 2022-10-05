<template>
  <h1>{{ category }}</h1>
  <p>{{ wordToTranslate }}</p>
  <AnswerItems :answers="answers" />
  <p>This was correct</p>
  <button>Next question</button>
</template>

<script setup>
import AnswerItems from "../components/AnswerItems.vue";
import { ref, onBeforeMount } from "vue";
const answers = ref([]);
const wordToTranslate = ref("");
const category = ref("");

onBeforeMount(() => {
  wordToTranslate.value = "Pineapple";
  category.value = "Fruit";
  answers.value = [...answers.value, "banan"];
  answers.value = [...answers.value, "ananas"];
  answers.value = [...answers.value, "äpple"];
});
</script>
