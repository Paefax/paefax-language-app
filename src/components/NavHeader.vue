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
  width: 90vw;
  margin-bottom: 2rem;
  justify-content: space-between;
  position: relative;
  display: flex;
  margin-bottom: 100px;
  box-shadow: 0 3px 5px rgba(10, 10, 10, 10);
}

img {
  width: 100px;
  padding-top: 1rem;
  padding-left: 1rem;
  justify-content: center;
}
</style>
