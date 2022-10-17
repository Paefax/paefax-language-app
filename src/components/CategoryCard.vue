<template>
  <RouterLink to="/quiz">
    <button @click="setCategory">{{ props.name }}</button>
  </RouterLink>
</template>

<script setup>
import { useGeneralStore } from "@/stores/general";
const props = defineProps(["name"]);
const general = useGeneralStore();

const setCategory = () => {
  general.setCategory(props.name);
};
</script>

<style scoped>
a {
  flex-basis: 40%;
}
</style>
