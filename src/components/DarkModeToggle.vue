<template>
    <main>
        <button @click="clickToggle" id="darkModeToggle" class="toggle">Change color scheme</button>
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
    color: v-bind('theme.theme.color');
    background-color: v-bind('theme.theme.buttonColor');

}

button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.2em;
    border: 1px solid black;
    cursor: pointer;
    margin-top: 50px;

}
</style>