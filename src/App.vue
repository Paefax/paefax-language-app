<template>
  <div id="app">
    <main id="viewport">
      <NavHeader
        v-show="
          ($route.name !== 'home' &&
            $route.name !== 'language' &&
            $route.name !== 'category') ||
          loggedIn
        "
      />
      <RouterView />
      <NavFooter />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavHeader from "./components/NavHeader.vue";
import NavFooter from "./components/NavFooter.vue";
import { computed } from "vue";
import { useUserStore } from "./stores/user";
import { useTheme } from "./stores/theme";

const userInfo = useUserStore();

const loggedIn = computed(() => userInfo.loggedIn);

const theme = useTheme();
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  background-color: v-bind("theme.theme.backgroundColor");
  color: v-bind("theme.theme.color");
}

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
