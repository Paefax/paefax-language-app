<template>
  <section class="dot-container">
    <span v-for="answer in quiz.answeredQuestions">
      <div v-if="answer">
        <CheckBold :size="35" class="check" />
        <CheckboxBlankCircle fillColor="#11814B" :size="38" class="circle" />
      </div>
      <div v-else="!answer">
        <CloseThick :size="38" class="cross" />
        <CheckboxBlankCircle fillColor="#FF0000" :size="38" class="circle" />
      </div>
    </span>

    <span v-for="(dot, index) in remainingQuestions" :key="index">
      <CheckboxBlankCircle
        v-if="!theme.theme.logo"
        :size="36"
        fillColor="#E9ECFC"
      />
      <CheckboxBlankCircle
        v-else="theme.theme.logo"
        :size="36"
        fillColor="gray"
      />
    </span>
  </section>
</template>

<script setup>
import { useQuizStore } from "@/stores/quiz";
import { computed } from "vue";
import CheckboxBlankCircle from "vue-material-design-icons/CheckboxBlankCircle.vue";
import CloseThick from "vue-material-design-icons/CloseThick.vue";
import CheckBold from "vue-material-design-icons/CheckBold.vue";
import { useTheme } from "../stores/theme";

const theme = useTheme();

const quiz = useQuizStore();
const remainingQuestions = computed(
  () => quiz.numberOfQuestions - quiz.answeredQuestions.length
);
</script>

<style scoped>
.dot-container {
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 50px;
  gap: 20px;
}

.cross {
  position: absolute;
  z-index: 1;
  color: "#E9ECFC";
}

.circle {
  z-index: -1;
}

.check {
  position: absolute;
  z-index: 1;
}

@media only screen and (min-width: 769px) {
  .dot-container {
    margin-bottom: 50px;
  }
}
</style>
