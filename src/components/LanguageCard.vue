<template>
  <RouterLink @click="setLanguage" :to="props.link">
    <h4>{{ props.name }}</h4>
    <main id="language-card-box">
      <img :src="props.img" />
      <section id="progress-box" v-if="hasProgress">
        <ProgressBar id="progress-bar" :progress="progress" />
      </section>
    </main>
  </RouterLink>
</template>

<script setup>
import { useGeneralStore } from "@/stores/general";
import { useQuizStore } from "@/stores/quiz";
import ProgressBar from "./ProgressBar.vue";
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const props = defineProps(["name", "img", "alt", "link"]);

const userInfo = useUserStore();
const general = useGeneralStore();
const quiz = useQuizStore();

const setLanguage = () => {
  general.setLanguage(props.name);
  quiz.setLanguage(props.name);
};

const progress = computed(
  () =>
    `${
      userInfo.progress
        .filter((x) => x.language === props.name.toLowerCase())
        .map((x) => x.progress)
        .reduce((partialSum, a) => partialSum + a, 0) / 3 //3 is number of categories
    }%`
);

const hasProgress = computed(
  () =>
    userInfo.progress
      .filter((x) => x.language === props.name.toLowerCase())
      .map((x) => x.progress)
      .reduce((partialSum, a) => partialSum + a, 0) /
      3 >
    0 //3 is number of categories
);
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
  z-index: 0;
  width: 150px;
  height: 100px;
  border-radius: 13px;
  object-fit: cover;
}

#progress-box {
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.56);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 35px;
  position: relative;
  top: -37px;
}

#progress-bar {
  z-index: 1;
  max-width: 80%;
  position: relative;
  top: 9px;
  left: 14px;
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

  #progress-box {
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    height: 60px;
    top: -62px;
  }

  #progress-bar {
    top: 20px;
    left: 28px;
  }

  h4 {
    font-size: 1.8em;
    margin-top: 30px;
  }
}
</style>
