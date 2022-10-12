<template>
  <div class="menu-options">
    <RouterLink to="/account"> Account </RouterLink>
    <RouterLink to="/settings"> Settings </RouterLink>
    <RouterLink to="/language"> Language </RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.menu-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
