<template>
  <main>
    <button>{{ props.name }}</button>
  </main>
</template>

<script setup>
const props = defineProps(["name"]);
</script>
