import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTheme = defineStore("theme", () => {

  const darkMode = ref(false);

  const backgroundColorLight = "white";
  const backgroundColorDark = "black";

  const theme = computed (() => {
    return {
        color: darkMode.value ? "black" : "white",
        backgroundColor: darkMode.value ? backgroundColorLight : backgroundColorDark,
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
