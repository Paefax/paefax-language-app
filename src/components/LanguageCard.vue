<template>
  <RouterLink :to="props.link">
    <h4>{{ props.name }}</h4>
    <main id="language-card-box">
      <img :src="'/src/assets/images/' + props.img" />
    </main>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["name", "img", "alt", "link"]);
</script>

<style scoped>
#language-card-box {
  max-width: 150px;
  max-height: 100px;
  border: 2px solid black;
  border-radius: 15px;
}

#language-card-box:hover {
  box-shadow: 0px 5px 10px black;
  transform: translateY(4px);
}

img {
  width: 150px;
  height: 100px;
  border-radius: 13px;
  object-fit: cover;
}

h4 {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
