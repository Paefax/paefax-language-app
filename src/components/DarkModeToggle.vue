<template>
    <main>
        <img v-if="theme.theme.logo" src="../assets/images/darkmode-dark.png" alt="Official Paefax logo"
            @click="clickToggle" class="toggle" />
        <img v-if="!theme.theme.logo" src="../assets/images/darkmode-light.png" alt="Official Paefax logo"
            @click="clickToggle" class="toggle" />
    </main>
</template>


<script setup>
import { useTheme } from "../stores/theme";

const theme = useTheme();

const clickToggle = () => {
    theme.toggleDarkMode();
}

</script>

<style scoped>
.toggle {
    width: 40%;
    margin-top: 20px;
}
</style>
