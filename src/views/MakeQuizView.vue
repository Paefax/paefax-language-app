<template>
  <main>
    <h1>Make Quiz</h1>
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
        <button @click.prevent="addQuestion()">ADD</button>
      </form>
      <section id="added-questions-section">
        <section id="questions-line">
          <div class="line"></div>
          <h3>Questions</h3>
          <div class="line"></div>
        </section>
        <section>
          <table id="added-questions-table" v-if="addedQuestions.length > 0">
            <thead>
              <th>ID</th>
              <th>Question</th>
              <th>Answer</th>
              <th></th>
            </thead>
            <tbody v-for="(question, index) in addedQuestions" :key="index">
              <td>{{ index }}</td>
              <td>{{ question.question }}</td>
              <td>{{ question.correctAnswer }}</td>
              <td>
                <button id="remove" @click.prevent="deleteQuestion(index)">
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
  addedQuestions.value.push({
    question: questionToAdd.value,
    correctAnswer: answerToAdd.value,
  });

  questionToAdd.value = "";
  answerToAdd.value = "";
};

const deleteQuestion = (index) => {
  addedQuestions.value.splice(index, 1);
};

const createQuiz = () => {
  let quiz = {
    name: quizName.value,
    language: quizLanguage.value,
    questions: addedQuestions.value,
  };

  userInfo.addUserMadeQuiz(quiz);

  quizName.value = "";
  quizLanguage.value = "";
  addedQuestions.value = [];
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
}

h1 {
  margin-left: 100px;
  margin-right: 100px;
  align-self: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin: auto;
}

h2 {
  margin-top: 40px;
  align-self: center;
}

#added-questions-section {
  width: 100%;
}

#questions-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}

.line {
  border: 1px solid white;
  width: 100%;
  height: 0;
}

#create-button {
  align-self: center;
  margin-top: 30px;
}
</style>
