<template>
  <main id="language-box">
    <h1>Pick a language</h1>
    <section id="language-cards">
      <LanguageCard
        v-for="(language, index) in languages"
        :key="language.id"
        :name="language.name"
        :img="language.img"
        :alt="language.alt"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import LanguageCard from "../components/LanguageCard.vue";

const languages = ref([
  {
    id: 1,
    name: "English",
    img: "uk-flag.svg",
    alt: "uk flag",
  },
  {
    id: 2,
    name: "Spanish",
    img: "spain-flag.svg",
    alt: "spain flag",
  },
  {
    id: 3,
    name: "French",
    img: "france-flag.svg",
    alt: "france flag",
  },
  {
    id: 4,
    name: "Chinese",
    img: "china-flag.svg",
    alt: "china flag",
  },
]);
</script>

<style scoped>
#language-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#language-cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
