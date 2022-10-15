<template>
  <main id="viewport">
    <NavHeader v-show="$route.name !== 'home'" />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavHeader from "./components/NavHeader.vue";
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
