<template>
  <main>
    <img
      v-if="theme.theme.logo"
      id="paefax-img"
      src="../assets/images/official-paefax-logo-dark.svg"
      alt="Official Paefax logo"
    />
    <img
      v-if="!theme.theme.logo"
      id="paefax-img"
      src="../assets/images/official-paefax-logo-light.svg"
      alt="Official Paefax logo"
    />
    <h1>Sign up</h1>
    <form id="signup-form" @submit.prevent="signUp()">
      <label for="name">Username:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="3"
        v-model="name"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="3"
        v-model="password"
      />
      <br />
      <input type="submit" id="create-account-btn" value="CREATE ACCOUNT" />
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import router from "../router/index";
import { useTheme } from "../stores/theme";

const theme = useTheme();
const name = ref("");
const password = ref("");

const signUp = () => {
  const url = "http://localhost:3000/user/create";

  const data = {
    name: name.value,
    password: password.value,
  };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response)
    .then((data) => {
      console.log("Success:", data);
    });

  name.value = "";
  password.value = "";

  router.push("/login");
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#paefax-img {
  width: 150px;
}

#signup-form {
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#password,
#name,
#create-account-btn {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border-color: v-bind("theme.theme.fieldColor");
  border: 1px solid;
  font-size: large;
}

#create-account-btn:hover {
  transform: translateY(4px);
  cursor: pointer;
}

#signup-form label {
  width: 100%;
  padding: 10px 0px;
}

#signup-form input {
  font-size: large;
  padding-left: 10px;
}

#create-account-btn {
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");
  font-size: 20px;
  margin-top: 10px;
  border-color: v-bind("theme.theme.fieldColor");
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
}

@media only screen and (min-width: 769px) {
  #password,
  #name,
  #create-account-btn {
    height: 50px;
  }

  #signup-form label {
    font-size: 20px;
  }
}
</style>
