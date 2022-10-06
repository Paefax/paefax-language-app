<template>
  <main id="landing-page-box">
    <img
      id="logo-img"
      src="../assets/images/logo.png"
      alt="Paefax logo globe with flags"
    />
    <h1 id="landing-page-title">Paefax Language Quiz</h1>
    <RouterLink to="/quiz">
      <button>Get Started</button>
    </RouterLink>
    <RouterLink to="/account">
      <button>Already have an account?</button>
    </RouterLink>
  </main>
</template>

<script setup></script>

<style scoped>
#landing-page-box {
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

#landing-page-title {
  font-size: 1.5em;
}
</style>
