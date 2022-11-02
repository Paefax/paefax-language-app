<template>
  <RouterLink to="/quiz/create">
    <div id="make-quiz-card">
      <h1>Create Quiz</h1>
    </div>
  </RouterLink>
</template>

<script setup>
import { useTheme } from "../stores/theme";

const theme = useTheme();
</script>

<style scoped>
#make-quiz-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 15px;
  background-color: v-bind("theme.theme.categoryCardColor");
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
  width: 248px;
  height: 98px;
  cursor: pointer;
}

#make-quiz-card:hover {
  box-shadow: 0px 5px 10px black;
  transform: translateY(4px);
}

h1 {
  margin: 0;
  padding: 15px;
  color: black;
  font-weight: normal;
}

@media only screen and (min-width: 769px) {
  #make-quiz-card {
    width: 348px;
    height: 138px;
  }
}
</style>
