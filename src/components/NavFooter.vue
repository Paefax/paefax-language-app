<template>
  <div class="footer-container">
    <div class="footer-item">
      <h3>Created by</h3>
      <ul>
        <li><a href="https://github.com/helenahalldiniths">Helena</a></li>
        <li><a href="https://github.com/Philippevial">Philippe</a></li>
        <li><a href="https://github.com/FelixJacobsen">Felix</a></li>
        <li><a href="https://github.com/ErikssonF">Fredrik</a></li>
        <li><a href="https://github.com/LordRekishi">Patrik</a></li>
      </ul>
    </div>
    <div class="footer-item">
      <h3>About</h3>
      <ul>
        <li><a href="#">Company</a></li>
        <li><a href="#">Team</a></li>
      </ul>
    </div>
    <div class="footer-item">
      <h3>Contact</h3>
      <ul>
        <li><a href="#">Contact us here</a></li>
      </ul>
    </div>
  </div>
  <p class="copyright">Paefax © {{ getYear }}</p>
</template>

<script setup>
const getYear = new Date().getFullYear.value;
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

h3 {
  font-size: 18px;
}
ul {
  list-style-type: none;
}

.footer-item {
  display: inline-block;
  margin: 1rem 1rem 1rem 1rem;
}

.footer-container {
  background: black;
  display: flex;
  position: absolute;
  bottom: 0;
}
</style>
