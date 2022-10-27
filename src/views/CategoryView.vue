<template>
  <section class="wizard">
    <RouterLink to="/language">
      <ArrowLeftCircleOutline :size="38" />
    </RouterLink>
    <WizardBalls :position="2" />
    <div id="space"></div>
  </section>
  <main>
    <h1>Category</h1>
    <section id="category-card">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="category.id"
        :name="category.name"
        :img="category.img"
        :alt="category.alt"
        :link="category.link"
      />
      <CategoryCard
        v-for="(quiz, index) in userQuizzes"
        :key="index"
        :name="quiz.name"
        img="src/assets/images/question-mark.png"
        alt="question mark"
        link="/quiz"
      />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";
import { useUserStore } from "../stores/user";
import { useGeneralStore } from "../stores/general";

const userInfo = useUserStore();
const general = useGeneralStore();

const categories = ref([]);
const userQuizzes = ref([]);

onMounted(() => {
  let url = `http://localhost:3000/categories`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      categories.value = data;
    });

  for (let i = 0; i < userInfo.userMadeQuizzes.length; i++) {
    console.log("General", general.getLanguage());
    console.log("Language", userInfo.userMadeQuizzes[i].language);
    console.log("UserInfo array", userInfo.userMadeQuizzes[i]);

    if (userInfo.userMadeQuizzes[i].language === general.getLanguage())
      userQuizzes.value.push(userInfo.userMadeQuizzes[i]);
  }

  console.log(userQuizzes.value);
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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

#category-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  flex-direction: column;
}

@media only screen and (min-width: 769px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
