<template>
  <div class="form">
    <label>Your Answer</label>
    <input class="input-field" type="text" v-model="input" />
    <button class="submit-button" @click="submitAnswer">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "../stores/theme";

const theme = useTheme();

const input = ref("");

const emits = defineEmits(["checkInputAnswer"]);

const submitAnswer = () => {
  emits("checkInputAnswer", input.value);
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

label {
  font-size: 1em;
  font-style: italic;
}

h4 {
  margin-top: 8px;
}

.input-field {
  max-width: 150px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.56);
  border: 1px solid v-bind("theme.theme.fieldColor");
  font-size: large;
  padding-left: 10px;
}

.submit-button {
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
}

@media only screen and (min-width: 769px) {
  .input-field {
    max-width: 200px;
    width: 100%;
    height: 50px;
    font-size: larger;
  }

  .submit-button {
    font-size: 2em;
  }
}
</style>
