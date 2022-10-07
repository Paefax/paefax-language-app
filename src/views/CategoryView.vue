<template>
  <main>
    <h1>Choose a category</h1>
    <section>
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
    name: "Fruit",
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
</style>
