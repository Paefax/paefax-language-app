<template>
  <Slide right noOverlay>
    <nav class="menu-options">
      <RouterLink to="/account"> Account </RouterLink>
      <RouterLink to="/settings"> Settings </RouterLink>
      <RouterLink to="/language"> Language </RouterLink>
    </nav>
  </Slide>
</template>

<script setup>
import { Slide } from "vue3-burger-menu";
</script>

<style>
a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.menu-options {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.bm-burger-bars {
  background-color: rgb(255, 255, 255);
}

.line-style {
  height: 15%;
}

.bm-burger-button {
  position: relative;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 36px;
}

.bm-menu {
}
</style>
