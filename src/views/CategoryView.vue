<template>
  <main>
    <h1>Choose a category</h1>
    <section id="category-card">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :name="category.name"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import CategoryCard from "../components/CategoryCard.vue";

const categories = ref([
  {
    id: 0,
    name: "Fruit",
    img: "fruit-flag.png",
    alt: "fruit flag",
    link: "/quiz",
  },
  {
    id: 1,
    name: "Animals",
    img: "animal-flag.png",
    alt: "animal flag",
    link: "/quiz",
  },
  {
    id: 2,
    name: "Numbers",
    img: "number-flag.png",
    alt: "number flag",
    link: "/quiz",
  },
  {
    id: 3,
    name: "Occupation",
    img: "occupation-flag.png",
    alt: "occupation flag",
    link: "/quiz",
  },
]);
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#category-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
