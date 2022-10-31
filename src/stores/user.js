import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const progress = ref([]);
  const username = ref("");
  const token = ref("");

  const getProgressFromDB = () => {
    let url = "http://localhost:3000/progress";
    fetch(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
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
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: language, category: category }),
    });
  };

  const removeProgress = () => {
    progress.value = [];
  };

  const getUsernameFromDB = () => {
    let url = "http://localhost:3000/user";
    fetch(url, {
      headers: {
        Authorization: "Bearer " + token.value,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        username.value = data.find((obj) => obj.id === 1).username; //OBS! hard coded user id = 1
      });
  };

  return {
    getProgressFromDB,
    progress,
    increaseScoreInDB,
    username,
    getUsernameFromDB,
    removeProgress,
  };
});
