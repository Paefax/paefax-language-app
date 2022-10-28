<template>
  <main>
    <img
      id="paefax-img"
      src="../assets/images/official-paefax-logo-white.svg"
      alt="Paefax logo"
    />
    <h1>Log in</h1>
    <form id="login-form" @submit.prevent="logIn()">
      <label for="name">Username:</label>
      <input type="text" id="name" name="name" v-model="name" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password" />
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
      <button id="sing-up-button">SIGN UP</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { ref } from "vue";
import router from "../router/index";

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
  background-color: rgb(255, 255, 255, 0.56);
  border-style: none;
}

#login-btn {
  background-color: #185359;
  color: white;
  font-size: 20px;
}

#forgot-psw-text {
  color: #30a5bf;
}

#login-form label {
  width: 100%;
  padding: 10px 0px;
}
#login-form input {
  font-size: large;
  padding-left: 10px;
}

#sing-up-button {
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
  height: 30px;
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
  border: 1px solid white;
}

@media only screen and (min-width: 769px) {
  hr {
    width: 160px;
  }

  #sing-up-button {
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
