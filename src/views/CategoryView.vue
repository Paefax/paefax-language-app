<template>
  <main>
    <h1>Category</h1>
    <section id="category-card">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="category.id"
        :name="category.name"
        :img="category.img"
        :alt="category.alt"
        :link="category.link"
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
    img: "fruits.png",
    alt: "fruit flag",
    link: "/quiz",
  },
  {
    id: 1,
    name: "Animals",
    img: "animal.png",
    alt: "animal flag",
    link: "/quiz",
  },
  {
    id: 2,
    name: "Numbers",
    img: "numbers.png",
    alt: "number flag",
    link: "/quiz",
  },
  {
    id: 3,
    name: "Occupation",
    img: "occupation.png",
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
