import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTheme = defineStore("theme", () => {

  const darkMode = ref(false);


  const theme = computed (() => {
    return {
        color: darkMode.value ? "white" : "black",
        backgroundColor: darkMode.value ? "white" : "black",
    }
  }) 


  const toggleDarkMode = () => {
    console.log(darkMode.value)
    console.table(theme.value)
    darkMode.value = !darkMode.value;

  }

  return {
    theme,
    toggleDarkMode,
  };
});
