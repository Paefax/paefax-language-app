<template>
  <div class="progress-bar">
    <span :style="{ width: props.progress }"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  overflow: hidden;
  position: relative;
}

.progress-bar span {
  height: 100%;
  display: block;
  color: rgb(251, 255, 252);
  line-height: 30px;
  position: absolute;
  text-align: end;
  padding-right: 5px;
  background-color: rgb(255, 191, 0);
}
</style>
