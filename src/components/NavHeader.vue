<template>
  <section class="banner">
    <RouterLink to="/">
      <img v-if="theme.theme.logo" src="../assets/images/lightmode-logo-no-text.png" alt="Official Paefax logo" />
      <img v-if="!theme.theme.logo" src="../assets/images/darkmode-logo-no-text.png" alt="Official Paefax logo" />
    </RouterLink>
    <DarkModeToggle />
    <HamburgerMenu />
  </section>
</template>

<script setup>
import HamburgerMenu from "./HamburgerMenu.vue";
import { useTheme } from "../stores/theme";
import DarkModeToggle from '../components/DarkModeToggle.vue'

const theme = useTheme();
</script>

<style >
.banner {
  width: 100vw;
  justify-content: space-between;
  position: relative;
  display: flex;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px rgba(10, 10, 10, 10);
}

img {
  padding-left: 10px;
  width: 100px;
  justify-content: center;
  cursor: pointer;
}

.toggle {
  cursor: pointer;
}
</style>
