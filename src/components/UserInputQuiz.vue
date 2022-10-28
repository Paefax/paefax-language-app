<template>
  <form>
    <label>Your Answer</label>
    <input class="input-field" type="text" v-model="input" />
    <button class="submit-button" @click="submitAnswer">Submit</button>
  </form>

  <!--   <span v-if="answeredQuestion">Your answer: </span>
  <h4 class="show-answer" v-if="answeredQuestion && answeredCorrectly">
    {{ currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1) }}
    <CheckBold fillColor="#11814B" class="check-bold" />
  </h4>
  <h4 class="show-wrong-answer" v-if="answeredQuestion && !answeredCorrectly">
    {{ currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1) }}
    <CloseThick fillColor="#ff0000" class="close-thick" />
  </h4>
  <div
    class="show-correct-answer"
    v-if="!answeredCorrectly && answeredQuestion"
  >
    Correct answer:
    <h4>{{ correctAnswer }}</h4>
  </div> -->
</template>

<script setup>
import { ref } from "vue";

const input = ref("");

const emits = defineEmits(["checkInputAnswer"]);

const submitAnswer = () => {
  emits("checkInputAnswer", input.value);
};
</script>

<style scoped>
form {
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

.input-field {
  max-width: 150px;
  width: 100%;
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
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
}

.show-correct-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-wrong-answer {
  display: flex;
  align-items: center;
}

.show-answer {
  display: flex;
  align-items: center;
}

.check-bold {
  padding-left: 5px;
  padding-bottom: 6px;
}

.close-thick {
  padding-left: 5px;
  padding-bottom: 5px;
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
