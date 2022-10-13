<template>
  <section class="dot-container">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </section>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import AnswerItems from "../components/AnswerItems.vue";

import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
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
