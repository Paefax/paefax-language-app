<template>
  <RouterLink to="/category">
    <label>{{ props.name }}</label>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["name"]);
</script>

<style scoped>
a {
  flex-basis: 40%;
}

label {
  color: grey;
}
</style>
