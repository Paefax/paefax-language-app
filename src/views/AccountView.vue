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
      <AccountProgress :language="language" />
    </div>
    <button>EDIT PROFILE</button>
  </main>
</template>

<script setup>
import AccountProgress from "../components/AccountProgress.vue";
const username = "fake_username";
const languages = ["Swedish", "Spanish"];
const profilePicture = "fake-profile.jpeg";
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
