<template>
  <section class="dot-container">
    <span
      v-for="(balls, index) in numberOfBalls"
      :key="index"
      class="dot"
      :class="{
        currentDot: props.position === index,
      }"
    ></span>
  </section>
</template>

<script setup>
const numberOfBalls = 3;
const props = defineProps({
  position: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.dot-container {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 20px;
  align-items: center;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.currentDot {
  background: yellow;
  height: 20px;
  width: 20px;
}
</style>
