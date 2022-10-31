import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTheme = defineStore("theme", () => {

  const darkMode = ref(false);

  const backgroundColorLight = "#DFEFF0";
  const backgroundColorDark = "#0B2B40";

  const fontColorLight = "#333333";
  const fontColorDark = "#E9ECFC";

  const footerColorDark = "#185359";
  const footerColorLight = "#79A3B1"

  const buttonColorDark = "#185359";
  const buttonColorLight = "#79A3B1";

  const subleTextLight = "#456268";
  const subleTextDark = "#9a9ca8";

  const theme = computed (() => {
    return {
        color: darkMode.value ? fontColorLight : fontColorDark,
        categoryCardColor: darkMode.value ? "black" : "white",
        backgroundColor: darkMode.value ? backgroundColorLight : backgroundColorDark,
        footerBackgroundColor: darkMode.value ? footerColorLight : footerColorDark,
        buttonColor: darkMode.value ? buttonColorLight : buttonColorDark,
        logo: darkMode.value ? true : false,
        subleText: darkMode.value ? subleTextLight : subleTextDark,

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
