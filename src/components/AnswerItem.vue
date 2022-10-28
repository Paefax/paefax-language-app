<template>
  <button @click.prevent="$emit('button-clicked', props.answer)">
    {{ props.answer.charAt(0).toUpperCase() + props.answer.slice(1) }}
  </button>
</template>

<script setup>
import { useTheme } from "../stores/theme";

const theme = useTheme();

const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2em;
  background-color: v-bind('theme.theme.footerBackgroundColor');
  color: v-bind('theme.theme.color');
  border: 1px solid black;
  cursor: pointer;
  margin-top: 8px;
}

@media only screen and (min-width: 769px) {
  button {
    width: 250px;
    height: 75px;
    border-radius: 15px;
    font-size: 2em;
  }
}
</style>
