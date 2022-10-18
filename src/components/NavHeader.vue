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
