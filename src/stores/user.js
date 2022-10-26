import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const categoriesPerLanguage = ref([
    {
      language: "swedish",
      categories: 3,
    },
    {
      language: "spanish",
      categories: 3,
    },
    {
      language: "german",
      categories: 3,
    },
  ]);
  const progress = ref([
    {
      language: "swedish",
      category: "fruit",
      progress: 50,
    },
    {
      language: "swedish",
      category: "occupation",
      progress: 30,
    },
    {
      language: "spanish",
      category: "animal",
      progress: 40,
    },
  ]);

  const token = ref("");

  const getProgress = (language, category) => {
    for (let i = 0; i < progress.value.length; i++) {
      if (
        progress.value[i].language === language.toLowerCase() &&
        progress.value[i].category === category.toLowerCase()
      ) {
        return progress.value[i].progress;
      }
    }
    return 0;
  };

  const getLanguageProgress = (language) => {
    const totalProgress = ref(0);
    for (let i = 0; i < progress.value.length; i++) {
      if (progress.value[i].language === language) {
        totalProgress.value = totalProgress.value + progress.value[i].progress;
      }
    }
    const numberOfCategories = ref(0);
    for (let i = 0; i < categoriesPerLanguage.value.length; i++) {
      if (categoriesPerLanguage.value[i].language === language) {
        numberOfCategories.value = categoriesPerLanguage.value[i].categories;
      }
    }
    return totalProgress.value / numberOfCategories.value;
  };

  const increaseProgress = (affectedLanguage, affectedCategory) => {
    const firstProgress = ref(true);

    for (let i = 0; i < progress.value.length; i++) {
      if (
        progress.value[i].language === affectedLanguage &&
        progress.value[i].category === affectedCategory
      ) {
        if (progress.value[i].progress < 100) {
          progress.value[i].progress = progress.value[i].progress + 10;
        }
        firstProgress.value = false;
      }
    }

    if (firstProgress.value === true) {
      progress.value.push({
        language: affectedLanguage,
        category: affectedCategory,
        progress: 10,
      });
    }
  };

  const getToken = () => {
    return token.value;
  };

  const setToken = (newToken) => {
    token.value = newToken;
  };

  return {
    getProgress,
    increaseProgress,
    getLanguageProgress,
    setToken,
    getToken,
  };
});
