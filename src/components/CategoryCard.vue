<template>
  <RouterLink to="/quiz">
    <button>{{ props.name }}</button>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["name"]);
</script>

<style scoped>
a {
  flex-basis: 40%;
}
</style>
