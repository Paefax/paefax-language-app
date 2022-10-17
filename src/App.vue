<template>
  <main id="viewport">
    <NavHeader
      v-show="
        $route.name !== 'home' &&
        $route.name !== 'language' &&
        $route.name !== 'category'
      "
    />
    <WizardComp
      v-show="
        $route.name === 'home' ||
        $route.name === 'language' ||
        $route.name === 'category'
      "
    />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavHeader from "./components/NavHeader.vue";
import WizardComp from "./components/WizardComp.vue";
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
