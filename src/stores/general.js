import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore("general", () => {
  const category = ref("fruit");
  const language = ref("swedish");

  const getCategory = () => {
    return category.value;
  };
  const setCategory = (newCategory) => {
    category.value = newCategory.toLowerCase();
  };

  const getLanguage = () => {
    return language.value;
  };
  const setLanguage = (newLanguage) => {
    language.value = newLanguage.toLowerCase();
  };

  return {
    setCategory,
    getCategory,
    setLanguage,
    getLanguage,
  };
});
