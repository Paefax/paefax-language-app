<template>
  <main>
    <img
      id="logo-img"
      src="../assets/images/logo.png"
      alt="Paefax logo globe with flags"
    />
    <h1>Paefax Language Quiz</h1>
    <RouterLink to="/language">
      <button>Get Started</button>
    </RouterLink>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  max-width: 375px;
}

#logo-img {
  max-width: 80%;
}
</style>
