<template>
  <main>
    <img
      id="paefax-img"
      src="../assets/images/official-paefax-logo-white.svg"
      alt="Paefax logo"
    />
    <h1>Log in</h1>
    <form id="login-form">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" /><br />
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
#username,
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
  #username,
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
