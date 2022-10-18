<template>
  <section class="wizard">
    <RouterLink to="/">
      <ArrowLeftCircleOutline size="38px" />
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
import { ref } from "vue";
import LanguageCard from "../components/LanguageCard.vue";
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";

const languages = ref([
  {
    id: 0,
    name: "Swedish",
    img: "swedish-flag.png",
    alt: "swedish flag",
    link: "/category",
  },
  {
    id: 1,
    name: "Spanish",
    img: "spanish-flag.png",
    alt: "spanish flag",
    link: "/category",
  },
  {
    id: 2,
    name: "French",
    img: "french-flag.png",
    alt: "french flag",
    link: "/category",
  },
  {
    id: 3,
    name: "Chinese",
    img: "chinese-flag.png",
    alt: "chinese flag",
    link: "/category",
  },
]);
</script>

<style scoped>
#space {
  margin: 20px;
}

.wizard {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
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
