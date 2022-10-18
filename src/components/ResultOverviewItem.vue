<template>
  <tr>
    <td>
      {{ props.info.word.charAt(0).toUpperCase() + props.info.word.slice(1) }}
    </td>
    <td>
      {{
        props.info.answer.charAt(0).toUpperCase() + props.info.answer.slice(1)
      }}
    </td>
    <td>
      {{
        props.info.correctAnswer.charAt(0).toUpperCase() +
        props.info.correctAnswer.slice(1)
      }}
    </td>
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
  width: 120px;
  height: 30px;
  text-align: center;
}

@media only screen and (min-width: 769px) {
  td {
    width: 170px;
    height: 50px;
    font-size: 1.3em;
  }
}
</style>
