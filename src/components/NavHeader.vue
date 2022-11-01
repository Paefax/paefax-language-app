<template>
  <section class="banner">
    <RouterLink to="/">
      <img v-if="theme.theme.logo" src="../assets/images/official-paefax-logo-dark.svg" alt="Official Paefax logo" />
      <img v-if="!theme.theme.logo" src="../assets/images/official-paefax-logo-light.svg" alt="Official Paefax logo" />
    </RouterLink>
    <HamburgerMenu />
  </section>
</template>

<script setup>
import HamburgerMenu from "./HamburgerMenu.vue";
import { useTheme } from "../stores/theme";

const theme = useTheme();
</script>

<style scoped>
.banner {
  width: 100vw;
  justify-content: space-between;
  position: relative;
  display: flex;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px rgba(10, 10, 10, 10);
}

img {
  width: 100px;
  justify-content: center;
}
</style>
