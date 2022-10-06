<template>
  <main id="language-card-box">
    <img :src="'/src/assets/images/' + props.img" />
    <h4>{{ props.name }}</h4>
  </main>
</template>

<script setup>
const props = defineProps(["name", "img", "alt"]);
</script>

<style scoped>
#language-card-box {
  max-width: 100px;
  width: 100%;
  max-height: 50px;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

img {
  max-width: 30%;
  width: 100%;
}
</style>
