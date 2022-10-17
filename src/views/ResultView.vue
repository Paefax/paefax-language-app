<template>
  <main>
    <QuizResult />
    <RouterLink to="/category">
      <button>Choose new category</button>
    </RouterLink>
    <RouterLink to="/">
      <button>Home</button>
    </RouterLink>
  </main>
</template>

<script setup>
import QuizResult from "../components/QuizResult.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
