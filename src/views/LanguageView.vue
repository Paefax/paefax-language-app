<template>
  <main>
    <h1>Language</h1>
    <section id="language-cards">
      <label v-for="language in languages">
        {{ language.name }}
      </label>

      <button
        v-for="language in languages"
        :class="{
          swedishButton: language.name === 'Swedish',
          chineseButton: language.name === 'Chinese',
          frenchButton: language.name === 'French',
          spanishButton: language.name === 'Spanish',
        }"
      ></button>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LanguageCard from "../components/LanguageCard.vue";

const languages = ref([
  {
    name: "Swedish",
  },
  {
    name: "Chinese",
  },
  {
    name: "Spanish",
  },
  {
    name: "French",
  },
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

a {
  flex-basis: 40%;
}

label {
  color: grey;
}

button {
  color: black;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  height: 100px;
  width: 160px;
  line-height: 1.5;
  padding: 15px;
  transition: all 0.3s ease 0s;
  border: 0.1em solid #000000;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

.swedishButton {
  background: url("../assets/images/swedish-flag.png");
  background-size: cover;
}

.chineseButton {
  background: url("../assets/images/chinese-flag.png");
  background-size: cover;
}
.frenchButton {
  background: url("../assets/images/french-flag.png");
  background-size: cover;
}

.spanishButton {
  background: url("../assets/images/spanish-flag.png");
  background-size: cover;
}

button:hover {
  box-shadow: 0px 5px 10px black;
  transform: translateY(-4px);
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-bottom: 10vw;
  font-weight: 400;
  font-size: 50px;
}

#language-cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
