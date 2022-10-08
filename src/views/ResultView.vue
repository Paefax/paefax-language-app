<template>
  <main>
    <h1>Good job!</h1>
    <h2>You finish the quiz</h2>
    <RouterLink to="/category">
      <button>Choose new category</button>
    </RouterLink>
    <RouterLink to="/">
      <button>Home</button>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
