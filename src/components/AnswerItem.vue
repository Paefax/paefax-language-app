<template>
  <div>
    <button
      @click.prevent="$emit('button-clicked', props.answer)"
      :class="{
        correctHighlight:
          props.answer === findCorrectAnswer && quiz.answerChosen,
        incorrectHighlight:
          props.answer !== findCorrectAnswer &&
          quiz.answerChosen === props.answer,
      }"
    >
      {{ props.answer.charAt(0).toUpperCase() + props.answer.slice(1) }}
      <CheckBold
        v-show="props.answer === findCorrectAnswer && quiz.answerChosen"
        class="check"
      />
      <CloseThick
        v-show="
          props.answer !== findCorrectAnswer &&
          quiz.answerChosen === props.answer
        "
        class="cross"
      />
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { computed } from "vue";
import { useTheme } from "../stores/theme";
import CloseThick from "vue-material-design-icons/CloseThick.vue";
import CheckBold from "vue-material-design-icons/CheckBold.vue";

const quiz = useQuizStore();
const emits = defineEmits(["button-clicked"]);

const buttonClicked = () => {
  emits("button-clicked", props.answer);
};

const findCorrectAnswer = computed(() => {
  return quiz.questions.find(
    (question) => question.id === quiz.idCurrentQuestion
  ).correctAnswer;
});

const theme = useTheme();

const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2em;
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");
  border: 1px solid black;
  cursor: pointer;
  margin-top: 8px;
}

button:hover {
  transform: translateY(4px);
  cursor: pointer;
}

.correctHighlight {
  border: 5px solid green;
}

.incorrectHighlight {
  border: 5px solid red;
}

.cross {
  padding-top: 3px;
  padding-left: 5px;
  padding-bottom: 0px;
}

.check {
  padding-top: 0;
  padding-left: 5px;
  padding-bottom: 0px;
}
@media only screen and (min-width: 769px) {
  button {
    width: 250px;
    height: 75px;
    border-radius: 15px;
    font-size: 2em;
  }

  .cross {
    width: 32px;
    height: 32px;
  }

  .check {
    width: 32px;
    height: 32px;
  }
}
</style>
