<template>
  <section class="banner">
    <RouterLink to="/">
      <img src="../assets/images/white-logo-without-text.png" alt="logo" />
    </RouterLink>
    <HamburgerMenu />
  </section>
</template>

<script setup>
import HamburgerMenu from "./HamburgerMenu.vue";
</script>

<style scoped>
.banner {
  height: 10vh;
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
