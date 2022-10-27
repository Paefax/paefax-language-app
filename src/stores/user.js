import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const progress = ref([]);
  const token = ref("");

  const getProgressFromDB = () => {
    let url = "http://localhost:3000/progress";
    fetch(url, {
      headers: {
        Authorization: "Bearer " + token.value,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        progress.value = data;
      });
  };

  const increaseScoreInDB = (language, category) => {
    let url = "http://localhost:3000/progress/update";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: language, category: category }),
    });
  };

  const setToken = (newToken) => {
    token.value = newToken;
  };

  return {
    setToken,
    getProgressFromDB,
    progress,
    token,
    increaseScoreInDB,
  };
});
