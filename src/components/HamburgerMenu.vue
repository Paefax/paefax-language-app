<template>
  <div class="menu-options">
    <RouterLink to="/account">
      <a>Account</a>
    </RouterLink>
    <RouterLink to="/settings">
      <a>Settings</a>
    </RouterLink>
    <RouterLink to="/language">
      <a>Language</a>
    </RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.menu-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
