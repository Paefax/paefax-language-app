<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/language">Language</RouterLink>
      <RouterLink to="/categories">Category</RouterLink>
    </nav>
  </header>
  <main id="viewport">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
header {
  margin: 0 auto;
  margin-top: 10px;
  max-width: 375px;
  width: 100%;
  display: flex;
  align-items: center;
}

nav {
  margin: 0 auto;
}

#viewport {
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
