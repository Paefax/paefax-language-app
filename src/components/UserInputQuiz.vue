<template>
  <form action="">
    <input class="input-field" type="text" v-model="input" />
    <button class="submit-button" @click="submitAnswer">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const input = ref();

const emits = defineEmits(["checkInputAnswer"]);

const submitAnswer = () => {
  emits("checkInputAnswer", input.value);
};
</script>

<style scoped>
.input-field {
  height: 40px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.56);
  border-style: none;
  font-size: large;
  padding-left: 10px;
}

.submit-button {
  background: #185359;
  color: #fff;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
  margin-top: 50px;
  margin-bottom: 10px;
}
</style>
