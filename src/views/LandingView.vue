<template>
  <main>
    <img id="logo-img" src="../assets/images/logo.svg" alt="Paefax logo" />
    <RouterLink to="/language">
      <button>Get Started</button>
    </RouterLink>
    <RouterLink to="/account">Already have an account?</RouterLink>
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
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
