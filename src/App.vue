<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>