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
    <h1>Log in</h1>
    <form id="login-form" @submit.prevent="logIn()">
      <label for="name">Username:</label>
      <input type="text" id="name" name="name" required v-model="name" />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        v-model="password"
      />
      <br />
      <input type="submit" id="login-btn" value="LOG IN" />
    </form>
    <p id="forgot-psw-text">forgot password?</p>
    <div id="or-div">
      <hr />
      OR
      <hr />
    </div>
    <RouterLink to="/signup">
      <button id="sign-up-button">SIGN UP</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { ref } from "vue";
import router from "../router/index";
import { useUserStore } from "../stores/user";
import { useTheme } from "../stores/theme";

const theme = useTheme();

const userInfo = useUserStore();

const name = ref("");
const password = ref("");

const logIn = async () => {
  const url = "http://localhost:3000/user/login";

  const data = {
    name: name.value,
    password: password.value,
  };

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      userInfo.isLoggedIn(true);
      localStorage.setItem("token", data.accessToken);
    });

  name.value = "";
  password.value = "";

  router.push("/account");
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

#login-form {
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#password,
#name,
#login-btn {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border-style: none;
  border: 1px solid;
  border-color: v-bind("theme.theme.fieldColor");
}

#login-btn {
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");
  font-size: 20px;
  margin-top: 10px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
  border: 1px solid;
  border-color: v-bind("theme.theme.fieldColor");
}

#login-btn:hover {
  transform: translateY(4px);
  cursor: pointer;
}

#forgot-psw-text {
  color: v-bind("theme.theme.subleText");
}

#forgot-psw-text:hover {
  transform: translateY(2px);
  cursor: pointer;
}

#login-form label {
  width: 100%;
  padding: 10px 0px;
}

#login-form input {
  font-size: large;
  padding-left: 10px;
}

#sign-up-button {
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
  height: 30px;
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
  border: 1px solid;
  border-color: v-bind("theme.theme.fieldColor");
}

#sign-up-button:hover {
  transform: translateY(4px);
  cursor: pointer;
}

#or-div {
  display: flex;
  font-size: 15px;
  margin-top: 20px;
}

hr {
  width: 120px;
  height: 0px;
  margin: 10px;
  border: 1px solid;
  border-color: v-bind("theme.theme.color");
}

@media only screen and (min-width: 769px) {
  hr {
    width: 160px;
  }

  #sign-up-button {
    font-size: 20px;
    width: 120px;
    height: 40px;
  }

  #password,
  #name,
  #login-btn {
    height: 50px;
  }

  #login-form label {
    font-size: 20px;
  }

  #login-btn {
    font-size: 25px;
  }
}
</style>
