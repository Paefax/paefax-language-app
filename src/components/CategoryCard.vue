<template>
  <main>
    <RouterLink to="/quiz">
      <button>{{ props.name }}</button>
    </RouterLink>
  </main>
</template>

<script setup>
const props = defineProps(["name"]);
</script>
