<template>
  <RouterLink :to="props.link" @click="setCategory">
    <h4>{{ props.name }}</h4>
    <main id="category-card-box">
      <img :src="'/src/assets/images/' + props.img" />
    </main>
  </RouterLink>
</template>

<script setup>
import { useGeneralStore } from "@/stores/general";
import { useQuizStore } from "@/stores/quiz";
const props = defineProps(["name", "img", "alt", "link"]);

const general = useGeneralStore();
const quiz = useQuizStore();

const setCategory = () => {
  general.setCategory(props.name);
  quiz.setCategory(props.name);
};
</script>

<style scoped>
#category-card-box {
  width: 300px;
  height: 120px;
  border: 2px solid black;
  border-radius: 15px;
  background: white;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

#category-card-box:hover {
  box-shadow: 0px 5px 10px black;
  transform: translateY(4px);
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
