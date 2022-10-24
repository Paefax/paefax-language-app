<template>
  <RouterLink @click="setLanguage" :to="props.link">
    <h4>{{ props.name }}</h4>
    <main id="language-card-box">
      <img :src="props.img" />
    </main>
  </RouterLink>
</template>

<script setup>
import { useGeneralStore } from "@/stores/general";
import { useQuizStore } from "@/stores/quiz";

const props = defineProps(["name", "img", "alt", "link"]);

const general = useGeneralStore();
const quiz = useQuizStore();

const setLanguage = () => {
  general.setLanguage(props.name);
  quiz.setLanguage(props.name);
};
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

@media only screen and (min-width: 769px) {
  #language-card-box {
    max-width: 300px;
    max-height: 200px;
    border-radius: 40px;
  }

  img {
    width: 300px;
    height: 200px;
    border-radius: 35px;
  }

  h4 {
    font-size: 1.8em;
    margin-top: 30px;
  }
}
</style>
