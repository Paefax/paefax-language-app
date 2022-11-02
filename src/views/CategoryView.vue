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
    <div>
      <h2>Selected language: {{ selectedLanguage }}</h2>
    </div>
    <section id="category-card">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
        :img="category.img"
        :alt="category.alt"
        :link="category.link"
        is-user-quiz="false"
      />
      <CategoryCard
        v-for="quiz in userQuizzes"
        :key="quiz.id"
        :id="quiz.id"
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
import { onMounted, ref, computed } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";
import { useUserStore } from "@/stores/user";
import { useQuizStore } from "@/stores/quiz";
import { useTheme } from "../stores/theme";
import { useQuizStore } from "@/stores/quiz";

const theme = useTheme();

const userInfo = useUserStore();
const quiz = useQuizStore();

const categories = ref([]);
const userQuizzes = ref([]);

const selectedLanguage = computed(
  () => quiz.language.charAt(0).toUpperCase() + quiz.language.slice(1)
);

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
          id: row.id,
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

h1 {
  margin-bottom: 0px;
}

h2 {
  margin-top: 0px;
  font-style: italic;
  font-weight: 300;
}

@media only screen and (min-width: 769px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
