<template>
  <main>
    <h1>My Profile</h1>
    <img
      id="profile-img"
      :src="'/src/assets/images/' + profilePicture"
      alt="Profile picture"
    />
    <h2>{{ username }}</h2>
    <h3 v-show="hasProgress">My Languages:</h3>
    <div v-for="(language, index) in languages" :key="index">
      <AccountProgress
        :language="language.name"
        :img="language.img"
        :link="language.link"
      />
    </div>

    <MakeQuizButtonVue />

    <RouterLink to="/language">
      <button>START A NEW QUIZ</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useTheme } from "../stores/theme";
import AccountProgress from "../components/AccountProgress.vue";
import MakeQuizButtonVue from "../components/MakeQuizButton.vue";

const theme = useTheme();

const userInfo = useUserStore();
const username = computed(() => userInfo.username);

const profilePicture = "fake-profile.jpeg";
const languages = ref([]);
const hasProgress = computed(() => userInfo.progress[0] !== undefined);

onMounted(() => {
  let url = `http://localhost:3000/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      languages.value = data;
    });
  userInfo.getProgressFromDB();
  userInfo.getUsernameFromDB();
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#profile-img {
  width: 150px;
  border-radius: 50%;
}

button {
  border-radius: 15px;
  cursor: pointer;
  font-size: 15px;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  font-weight: 700;
  transition: all 0.3s;
  margin-top: 30px;
  margin-bottom: 50px;
  color: v-bind("theme.theme.color");
  background-color: v-bind("theme.theme.footerBackgroundColor");
  box-shadow: 0px 5px 10px black;
  border: 1px solid v-bind("theme.theme.fieldColor");
}

button:hover {
  transform: translateY(4px);
  cursor: pointer;
}

@media only screen and (min-width: 769px) {
  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 20px;
  }

  button {
    font-size: 20px;
    width: 230px;
    height: 50px;
  }
}
</style>
