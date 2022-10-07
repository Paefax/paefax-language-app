<template>
  <main>
    <RouterLink to="/category">
      <button>{{ props.name }}</button>
    </RouterLink>
  </main>
</template>

<script setup>
const props = defineProps(["name"]);
</script>
