<template>
    <main>
        <button @click="clickToggle" id="darkModeToggle" class="toggle">Change color scheme</button>
    </main>
</template>


<script setup>
import { useTheme } from "@/stores/theme";

const theme = useTheme();

const clickToggle = () => {
    theme.toggleDarkMode();
}

</script>

<style scoped>
.toggle {
    color: v-bind(theme.theme.color)
}
</style>