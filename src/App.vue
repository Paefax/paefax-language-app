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
  min-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (min-width: 376px) {
  #viewport {
    max-width: 768px;
  }
}

@media only screen and (min-width: 769px) {
  #viewport {
    max-width: 1280px;
  }
}

@media only screen and (min-width: 1281px) {
  #viewport {
    max-width: 1440px;
  }
}
</style>
