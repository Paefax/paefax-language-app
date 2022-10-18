<template>
  <main>
    <QuizResult />
    <button class="button2">Take new quiz</button>
    <RouterLink to="/category">
      <button class="button1">Change category</button>
    </RouterLink>
    <RouterLink to="/language">
      <button class="button1">Change language</button>
    </RouterLink>
    <RouterLink to="/account">
      <button class="button3">Account</button>
    </RouterLink>
  </main>
</template>

<script setup>
import QuizResult from "../components/QuizResult.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  padding: 0;
}

button {
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  transition: all 0.3s;
}

.button1 {
  background: #185359;
  color: #fff;
  font-weight: 500;
}

.button2 {
  background: #fff;
  color: black;
  font-weight: 500;
}

.button3 {
  background: #fff;
  color: black;
  font-weight: 700;
  width: 100px;
  height: 40px;
  margin-top: 30px;
  margin-bottom: 50px;
}

@media only screen and (min-width: 769px) {
  button {
    border-radius: 10px;
    font-size: 25px;
    width: 300px;
    height: 60px;
    margin-top: 15px;
  }

  .button3 {
    width: 160px;
    height: 50px;
    margin-top: 40px;
  }
}
</style>
