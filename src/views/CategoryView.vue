<template>
  <section class="wizard">
    <RouterLink to="/language">
      <ArrowLeftCircleOutline
        :size="38"
        v-if="theme.theme.logo"
        fillColor="#456268"
      />
      <ArrowLeftCircleOutline :size="38" v-else="!theme.theme.logo" />
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
        is-user-quiz="false"
      />
      <CategoryCard
        v-for="(quiz, index) in userQuizzes"
        :key="index"
        :name="quiz.name"
        img="src/assets/images/question-mark.png"
        alt="question mark"
        link="/quiz"
        :is-user-quiz="quiz.isUserQuiz"
      />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";
import { useUserStore } from "@/stores/user";
import { useTheme } from "../stores/theme";
import { useQuizStore } from "@/stores/quiz";

const theme = useTheme();

const userInfo = useUserStore();
const quiz = useQuizStore();

const categories = ref([]);
const userQuizzes = ref([]);

onMounted(() => {
  let url = `http://localhost:3000/categories`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      categories.value = data;
    });

  userInfo.getProgressFromDB();

  url = `http://localhost:3000/user/quiz/${quiz.language}`;

  fetch(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        let userQuiz = {
          name: row.name,
          language: row.language,
          questions: JSON.parse(row.questions),
          isUserQuiz: true,
        };

        userQuizzes.value.push(userQuiz);
      });
    });
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
