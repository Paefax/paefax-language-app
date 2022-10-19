<template>
  <main id="viewport">
    <NavHeader v-show="$route.name !== 'home'" />
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
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
  max-width: 375px;
  min-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transition: translateX(-30%);
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
