<template>
  <main>
    <h1>Create Quiz</h1>
    <form id="create-quiz-form">
      <form id="quiz-data-form">
        <label for="quiz-name">Quiz name</label>
        <input type="text" id="quiz-name" name="quiz-name" v-model="quizName" />
        <label for="quiz-language">Language</label>
        <select id="quiz-language" name="quiz-language" v-model="quizLanguage">
          <option selected disabled hidden>Select Language</option>
          <option
            v-for="language in languages"
            :key="language.id"
            :value="language.name"
          >
            {{ language.name }}
          </option>
        </select>
      </form>

      <h2>Add Question</h2>
      <form id="add-question-form">
        <label for="question">Question</label>
        <input
          type="text"
          id="question"
          name="question"
          v-model="questionToAdd"
        />
        <label for="answer">Answer</label>
        <input type="text" id="answer" name="answer" v-model="answerToAdd" />
        <button id="add-button" @click.prevent="addQuestion()">ADD</button>
      </form>
      <section id="questions-line">
        <div class="line"></div>
        <h3>Questions</h3>
        <div class="line"></div>
      </section>
      <section id="added-questions-section">
        <section>
          <table id="added-questions-table" v-if="addedQuestions.length > 0">
            <thead>
              <th id="id-header">ID</th>
              <th id="question-header">Question</th>
              <th id="answer-header">Answer</th>
              <th id="empty-header"></th>
            </thead>
            <tbody v-for="(question, index) in addedQuestions" :key="index">
              <td>{{ index }}</td>
              <td>{{ question.question }}</td>
              <td>{{ question.correctAnswer }}</td>
              <td id="delete-column">
                <button
                  id="remove-button"
                  @click.prevent="deleteQuestion(index)"
                >
                  X
                </button>
              </td>
            </tbody>
          </table>
        </section>
      </section>
      <button id="create-button" @click.prevent="createQuiz()">
        CREATE QUIZ
      </button>
    </form>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";

const userInfo = useUserStore();

const quizName = ref("");
const quizLanguage = ref("Select Language");
const languages = ref([]);

const questionToAdd = ref("");
const answerToAdd = ref("");

const addedQuestions = ref([]);

const addQuestion = () => {
  if (questionToAdd.value === "" || answerToAdd.value === "") {
    console.error("You need to input both a question and answer");
  } else {
    addedQuestions.value.push({
      question: questionToAdd.value,
      correctAnswer: answerToAdd.value,
    });

    questionToAdd.value = "";
    answerToAdd.value = "";
  }
};

const deleteQuestion = (index) => {
  addedQuestions.value.splice(index, 1);
};

const createQuiz = () => {
  if (
    quizName.value === "" ||
    quizLanguage.value === "Select Language" ||
    addedQuestions.value.length === 0
  ) {
    console.error("You need to fill in all fields to create a quiz");
  } else {
    let quiz = {
      name: quizName.value,
      language: quizLanguage.value,
      questions: addedQuestions.value,
    };

    userInfo.addUserMadeQuiz(quiz);

    quizName.value = "";
    quizLanguage.value = "";
    addedQuestions.value = [];
  }
};

onMounted(() => {
  let url = `http://localhost:3000/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      languages.value = data;
    });
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  font-size: 0.8em;
}

h1 {
  align-self: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  margin: auto;
}

h2 {
  margin-top: 40px;
  align-self: center;
}

input,
select {
  width: 100%;
  height: 30px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.56);
  border-style: none;
  font-size: 1.2em;
  padding-left: 10px;
}

#added-questions-section {
  max-width: 375px;
  width: 90%;
  align-self: center;
}

#questions-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  gap: 5px;
  margin-top: 20px;
  min-width: 90vw;
}

.line {
  border: 1px solid white;
  width: 100%;
  height: 0;
}

#added-questions-table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

td {
  border-top: 1px solid white;
  word-wrap: break-word;
}

th,
td {
  border-right: 1px solid white;
  padding: 8px;
}

#question-header {
  width: 110px;
}

#answer-header {
  width: 110px;
}

#empty-header,
#delete-column {
  border-right: none;
}

button {
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s;
}

#add-button {
  background: #185359;
  color: #fff;
  margin-top: 5px;
  font-size: 0.9em;
}

#remove-button {
  font-size: 1em;
  padding: 5px 10px;
}

#create-button {
  align-self: center;
  margin-top: 30px;
  margin-bottom: 50px;
  background: #185359;
  color: #fff;
  font-size: 1.2em;
}

@media only screen and (min-width: 376px) {
  main {
    font-size: 1em;
  }

  #questions-line {
    min-width: 375px;
  }

  #create-button {
    margin-bottom: 0;
  }
}
</style>
