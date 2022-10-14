<template>
  <main id="viewport">
    <NavHeader v-show="$route.name !== 'home'" />
    <RouterView />
    <NavFooter />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavHeader from "./components/NavHeader.vue";
import NavFooter from "./components/NavFooter.vue";
</script>

<style scoped>
#viewport {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
