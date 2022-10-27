<template>
  <RouterLink :to="props.link" @click="setCategory">
    <h4>{{ props.name }}</h4>
    <main id="category-card-box">
      <img :src="props.img" />
      <ProgressBar id="progress-bar" :progress="progress" v-if="hasProgress" />
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

const setCategory = () => {
  general.setCategory(props.name);
  quiz.setCategory(props.name);
};

const progress = computed(() => {
  return `${userInfo.progress
    .filter(
      (obj) =>
        obj.language === general.getLanguage() &&
        obj.category === props.name.toLowerCase()
    )
    .map((obj) => obj.progress)}%`;
});

const hasProgress = computed(() => {
  return (
    userInfo.progress
      .filter(
        (obj) =>
          obj.language === general.getLanguage() &&
          obj.category === props.name.toLowerCase()
      )
      .map((obj) => obj.progress) > 0
  );
});
</script>

<style scoped>
#category-card-box {
  width: 300px;
  height: 120px;
  border: 2px solid black;
  border-radius: 15px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

#category-card-box:hover {
  box-shadow: 0px 5px 10px black;
  transform: translateY(4px);
}

#progress-bar {
  max-width: 80%;
}

img {
  width: 130px;
  border-radius: 13px;
}

h4 {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

@media only screen and (min-width: 769px) {
  #category-card-box {
    min-width: 600px;
    min-height: 240px;
    border-radius: 40px;
  }

  img {
    width: 260px;
    border-radius: 35px;
  }

  h4 {
    font-size: 1.8em;
    margin-top: 30px;
  }
}
</style>
