import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const progress = ref([]);
  const username = ref("");
  const loggedIn = ref(localStorage.getItem("token") === null ? false : true);
  const userMadeQuizzes = ref([]);

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
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        username.value = data[0].username;
      });
  };

  const isLoggedIn = (boolean) => {
    loggedIn.value = boolean;
  };

  const addUserMadeQuiz = (newQuiz) => {
    userMadeQuizzes.value.push(newQuiz);
    console.log(newQuiz);
    console.log(userMadeQuizzes.value);
  };

  return {
    getProgressFromDB,
    progress,
    increaseScoreInDB,
    username,
    getUsernameFromDB,
    userMadeQuizzes,
    addUserMadeQuiz,
    loggedIn,
    isLoggedIn,
    removeProgress,
  };
});
