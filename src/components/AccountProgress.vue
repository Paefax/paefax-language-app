<template>
  <section class="language-card" v-if="hasProgress">
    <img :src="props.img" />
    <div class="progress-info">
      <div class="language">{{ props.language }}</div>
      <div class="progress-bar">
        <ProgressBar :progress="progress" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProgressBar from "./ProgressBar.vue";
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const userInfo = useUserStore();
const props = defineProps(["language", "img"]);

const progress = computed(
  () =>
    `${
      userInfo.progress
        .filter((x) => x.language === props.language.toLowerCase())
        .map((x) => x.progress)
        .reduce((partialSum, a) => partialSum + a, 0) / 3 //3 is number of categories
    }%`
);

const hasProgress = computed(
  () =>
    userInfo.progress
      .filter((x) => x.language === props.language.toLowerCase())
      .map((x) => x.progress)
      .reduce((partialSum, a) => partialSum + a, 0) /
      3 >
    0 //3 is number of categories
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
