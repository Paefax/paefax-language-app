<template>
  <RouterLink @click="setLanguage" :to="props.link" v-if="progress > 0">
    <section class="language-card">
      <img :src="props.img" />
      <div class="progress-info">
        <div class="language">{{ props.language }}</div>
        <div class="progress-bar">
          <ProgressBar :progress="`${progress}%`" />
        </div>
      </div>
    </section>
  </RouterLink>
</template>

<script setup>
import ProgressBar from "./ProgressBar.vue";
import { useUserStore } from "@/stores/user";
import { computed } from "vue";
import { useQuizStore } from "@/stores/quiz";
import { useTheme } from "../stores/theme";

const theme = useTheme();

const quiz = useQuizStore();
const userInfo = useUserStore();
const props = defineProps(["language", "img", "link"]);
const categoriesPerLanguage = 3; //This is hardcoded for now.

const setLanguage = () => {
  quiz.setLanguage(props.language);
};

const progress = computed(
  () =>
    userInfo.progress
      .filter((obj) => obj.language === props.language.toLowerCase())
      .map((obj) => obj.progress)
      .reduce((partialSum, nextValue) => partialSum + nextValue, 0) /
    categoriesPerLanguage
);
</script>

<style scoped>
.language-card {
  width: 250px;
  height: 120px;
}

img {
  z-index: 0;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;
}

.progress-info {
  z-index: 10;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 0;
  background-color: rgb(30, 30, 30, 0.87);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: flex-start;
  position: relative;
  top: -43px;
}

.language {
  padding-left: 10px;
}

.progress-bar {
  width: 160px;
}

@media only screen and (min-width: 769px) {
  .language-card {
    width: 350px;
    height: 160px;
  }

  img {
    height: 140px;
  }

  .progress-bar {
    width: 250px;
  }
}
</style>
