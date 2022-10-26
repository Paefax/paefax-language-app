<template>
  <main>
    <img
      id="profile-img"
      :src="'/src/assets/images/' + profilePicture"
      alt="Profile picture"
    />
    <h1>{{ username }}</h1>
    <h2>My Languages:</h2>
    <div v-for="(language, index) in languages" :key="index">
      <AccountProgress :language="language.name" :img="language.img" />
    </div>
    <button>EDIT PROFILE</button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AccountProgress from "../components/AccountProgress.vue";
const username = "fake_username";
const profilePicture = "fake-profile.jpeg";
const languages = ref([]);

onMounted(() => {
  let url = `http://localhost:3000/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      languages.value = data;
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

#profile-img {
  width: 250px;
  border-radius: 50%;
}
button {
  border-radius: 15px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  background: #fff;
  color: black;
  font-weight: 700;
  transition: all 0.3s;
  margin-top: 30px;
  margin-bottom: 50px;
}

@media only screen and (min-width: 769px) {
  h2 {
    font-size: 30px;
  }
}
</style>
