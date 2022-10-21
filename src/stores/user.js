import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const progress = ref([
    {
      language: "swedish",
      category: "fruit",
      progress: 20,
    },
    {
      language: "swedish",
      category: "occupation",
      progress: 40,
    },
    {
      language: "spanish",
      category: "animal",
      progress: 30,
    },
  ]);

  const getProgress = (language, category) => {
    for (let i = 0; i < progress.value.length; i++) {
      if (
        progress.value[i].language === language &&
        progress.value[i].category === category
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
    return totalProgress.value;
  };

  const increaseProgress = (affectedLanguage, affectedCategory) => {
    const firstProgress = ref(true);

    for (let i = 0; i < progress.value.length; i++) {
      if (
        progress.value[i].language === affectedLanguage &&
        progress.value[i].category === affectedCategory
      ) {
        progress.value[i].progress = progress.value[i].progress + 10;
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

  return { getProgress, increaseProgress, getLanguageProgress };
});
