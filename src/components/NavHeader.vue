<template>
  <div class="banner">
    <img src="../assets/images/logo.svg" alt="logo" />
    <HamburgerMenu />
  </div>
</template>

<script setup>
import HamburgerMenu from "./HamburgerMenu.vue";
</script>

<style scoped>
.banner {
  height: 15vh;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  position: relative;
}

img {
  width: 12vh;
  padding-top: 1rem;
  padding-left: 1rem;
}
</style>
