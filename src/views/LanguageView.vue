<template>
  <section class="wizard">
    <RouterLink to="/">
      <ArrowLeftCircleOutline :size="38" />
    </RouterLink>
    <WizardBalls :position="1" />
    <div id="space"></div>
  </section>
  <main id="language-box">
    <h1>Language</h1>
    <section id="language-cards">
      <LanguageCard
        v-for="language in languages"
        :key="language.id"
        :name="language.name"
        :img="language.img"
        :alt="language.alt"
        :link="language.link"
      />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LanguageCard from "../components/LanguageCard.vue";
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";

const languages = ref([]);

onMounted(() => {
  let url = `http://localhost:3000/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      languages.value = data;
    });
});
</script>

<style scoped>
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
}

@media only screen and (min-width: 769px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
