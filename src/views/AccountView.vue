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
    <RouterLink to="/language">
      <button>START A NEW QUIZ</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import AccountProgress from "../components/AccountProgress.vue";
import { useUserStore } from "@/stores/user";
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
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  width: 180px;
  height: 40px;
  transition: all 0.3s;
  background: #185359;
  color: #fff;
  font-weight: 500;
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
