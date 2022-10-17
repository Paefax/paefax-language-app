<template>
  <RouterLink :to="props.link">
    <h4>{{ props.name }}</h4>
    <main id="category-card-box">
      <img :src="'/src/assets/images/' + props.img" />
    </main>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["name", "img", "alt", "link"]);
</script>

<style scoped>
#category-card-box {
  min-width: 300px;
  min-height: 120px;
  border: 2px solid black;
  border-radius: 15px;
  background: white;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

#category-card-box:hover {
  box-shadow: 0px 5px 10px black;
  transform: translateY(4px);
}

img {
  width: 130px;
  border-radius: 13px;
}

h4 {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
