<template>
    <main>
        <button @click="toggleDark" id="darkModeToggle">Change color scheme</button>
    </main>
</template>


<script setup>

let toggled = true;
const toggleDark = () => {

    console.log(document.getElementsByClassName("container"));
    if (toggled) {
        document.body.style.backgroundColor = "#79A3B1";
        document.body.style.color = "#000";
        document.getElementsByClassName("container")[0].style.backgroundColor = "#456268"

        toggled = false;
    } else {
        document.body.style.backgroundColor = "rgba(11, 43, 64, 1)"
        document.body.style.color = "#FFFF"
        document.getElementsByClassName("container")[0].style.backgroundColor = "#185359"

        toggled = true;
    }
};
</script>