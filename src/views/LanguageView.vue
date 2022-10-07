<template>
  <main>
    <h1>Pick a language</h1>
    <section id="language-cards">
      <LanguageCard
        v-for="(language, index) in languages"
        :key="index"
        :name="language.name"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import LanguageCard from "../components/LanguageCard.vue";

const languages = ref([
  {
    name: "Swedish",
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

#language-cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
