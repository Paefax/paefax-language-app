<template>
  <section class="dot-container">
    <span v-for="(ball, index) in numberOfBalls" :key="index">
      <div>
        <CheckboxBlankCircle
          :class="{
            color: props.position === index,
          }"
        />
      </div>
    </span>
  </section>
</template>

<script setup>
import CheckboxBlankCircle from "vue-material-design-icons/CheckboxBlankCircle.vue";

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

.color {
  color: yellow;
}
</style>
