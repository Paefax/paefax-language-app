<template>
  <main>
    <img
      id="logo-img"
      src="../assets/images/official-paefax-logo-white.svg"
      alt="Official Paefax logo"
    />
    <RouterLink to="/language">
      <button class="get-started-btn">Get Started</button>
    </RouterLink>
    <RouterLink to="/login">
      <button>Already have a account?</button>
    </RouterLink>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 375px;
}

#logo-img {
  max-width: 80%;
  margin-top: 30px;
}
.get-started-btn {
  background: #185359;
  color: #fff;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
}
</style>
