<template>
  <button @click.prevent="$emit('button-clicked',props.answer)">{{ props.answer }}</button>
</template>

<script setup>
const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});


</script>
