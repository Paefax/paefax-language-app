<template>
  <div class="banner">
    <RouterLink to="/">
      <img src="../assets/images/logo.svg" alt="logo" />
    </RouterLink>
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
  position: relative;
}

img {
  width: 12vh;
  padding-top: 1rem;
  padding-left: 1rem;
}
</style>
