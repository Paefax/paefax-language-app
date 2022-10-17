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

.button1 {
  background: #185359;
  color: #fff;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  line-height: 1.5;
  padding: 14px 40px;
  transition: all 0.3s;
}
.button3 {
  background: #fff;
  color: black;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  height: 50px;
  line-height: 1.5;
  padding: 15px;
  transition: all 0.3s;
}

.button2 {
  background: #fff;
  color: black;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  line-height: 1.5;
  padding: 14px 40px;
  transition: all 0.3s;
}
</style>
