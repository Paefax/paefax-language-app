<template>
  <tr>
    <td>{{ props.info.word }}</td>
    <td>{{ props.info.answer }}</td>
    <td>{{ props.info.correctAnswer }}</td>
  </tr>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
  },
});
</script>

<style scoped>
td {
  padding: 12px 25px;
  text-align: center;
}
</style>
