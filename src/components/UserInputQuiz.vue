<template>
  <form action="">
    <input class="user-input" type="text" v-model="inputAnswer" />
    <input type="submit" name="submit" id="submit" />
  </form>
  <p>{{ inputAnswer }}</p>
</template>

<script setup>
import { ref } from "vue";

const inputAnswer = ref("");
</script>

<style scoped></style>
