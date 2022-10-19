<template>
  <section class="wizard">
    <RouterLink to="/language">
      <ArrowLeftCircleOutline size="38px" />
    </RouterLink>
    <WizardBalls :position="2" />
    <div id="space"></div>
  </section>
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
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";

const categories = ref([
  {
    id: 0,
    name: "Fruit",
    img: "fruits.png",
    alt: "fruits",
    link: "/quiz",
  },
  {
    id: 1,
    name: "Animals",
    img: "animal.jpg",
    alt: "animals",
    link: "/quiz",
  },
  {
    id: 2,
    name: "Occupation",
    img: "occupation.jpg",
    alt: "occupations",
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

#space {
  width: 58px;
}

.wizard {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

#category-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

@media only screen and (min-width: 376px) {
  main {
    max-width: 500px;
  }
}

@media only screen and (min-width: 769px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
