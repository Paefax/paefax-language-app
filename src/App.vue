<template>
  <main id="viewport">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style scoped>
#viewport {
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
