<template>
  <main>
    <img
      id="logo-img"
      src="../assets/images/logo.svg"
      alt="Paefax logo globe with flags"
    />
    <RouterLink to="/language">
      <button>Get Started</button>
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
</style>
