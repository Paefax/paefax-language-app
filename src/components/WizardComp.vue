<template>
  <section class="dot-container">
    <span
      class="dot"
      v-for="path in paths"
      :class="{
        currentDot: '/' === getPath,
      }"
    ></span>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const getPath = computed(() => route.path);

const paths = [
  {
    id: 0,
    name: "home",
    link: "/",
  },
  {
    id: 1,
    name: "language",
    link: "/language",
  },
  {
    id: 2,
    name: "category",
    link: "/category",
  },
];
</script>

<style scoped>
.dot-container {
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
  gap: 20px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.currentDot .routerLink {
  background: yellow;
  height: 35px;
  width: 35px;
}
</style>
