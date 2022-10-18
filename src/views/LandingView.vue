<template>
  <main>
    <img id="logo-img" src="../assets/images/official-paefax-logo-white.svg" alt="Official Paefax logo" />
    <RouterLink to="/language">
      <button class="get-started-btn">Get Started</button>
    </RouterLink>
    <RouterLink to="/login">
      <h4>Already have an account?</h4>
    </RouterLink>
  </main>
</template>

<script setup>

import { onMounted } from 'vue';
import { useQuizStore } from "@/stores/quiz";

const quiz = useQuizStore();

onMounted(() => {
  quiz.resetProgressBalls();
  quiz.resetQuizProgress();
});

</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  max-width: 375px;
}

#logo-img {
  max-width: 80%;
}

.get-started-btn {
  background: #185359;
  color: #fff;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
  margin-top: 50px;
  margin-bottom: 10px;
}

h4 {
  font-weight: 300;
  color: #30a5bf;
  margin: 0;
}

@media only screen and (min-width: 769px) {
  main {
    margin-top: 80px;
    max-width: 500px;
  }

  .get-started-btn {
    font-size: 1.7em;
  }

  h4 {
    font-size: 1.2em;
  }
}
</style>
