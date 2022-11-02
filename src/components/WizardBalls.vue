<template>
  <section v-show="!loggedIn" class="dot-container">
    <span
      v-show="theme.theme.logo"
      v-for="(ball, index) in numberOfBalls"
      :key="index"
    >
      <CheckboxBlankCircle
        v-if="props.position === index"
        fillColor="#faab35"
        :size="30"
      />
      <CheckboxBlankCircle
        v-else="props.position === !index"
        fillColor="gray"
      />
    </span>
    <span
      v-show="!theme.theme.logo"
      v-for="(ball, index) in numberOfBalls"
      :key="index"
    >
      <CheckboxBlankCircle
        v-if="props.position === index"
        fillColor="rgb(255, 191, 0)"
        :size="30"
      />
      <CheckboxBlankCircle
        v-else="props.position === !index"
        fillColor="gray"
      />
    </span>
  </section>
</template>

<script setup>
import CheckboxBlankCircle from "vue-material-design-icons/CheckboxBlankCircle.vue";
import { useTheme } from "../stores/theme";
import { useUserStore } from "../stores/user";
import { computed } from "vue";

const userInfo = useUserStore();
const theme = useTheme();

const numberOfBalls = 3;
const loggedIn = computed(() => userInfo.loggedIn);

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
</style>
