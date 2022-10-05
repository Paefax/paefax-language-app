<template>
  <button>{{ props.answer }}</button>
</template>

<script setup>
const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});
</script>
