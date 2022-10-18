<template>
  <section class="wizard">
    <RouterLink :to="props.router">
      <ArrowLeftCircleOutline />
    </RouterLink>
    <WizardBalls :position="props.position" />
  </section>
</template>

<script setup>
import WizardBalls from "../components/WizardBalls.vue";
import ArrowLeftCircleOutline from "vue-material-design-icons/ArrowLeftCircleOutline.vue";
const props = defineProps({
  position: {
    type: Number,
    required: true,
  },
  router: {
    type: Text,
    required: true,
  },
});
</script>
