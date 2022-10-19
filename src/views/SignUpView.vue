<template>
  <main>
    <img
      id="paefax-img"
      src="../assets/images/official-paefax-logo-white.svg"
      alt="Paefax logo"
    />
    <h1>Sign up</h1>
    <form id="signup-form">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <label for="confirm-password">Confirm password:</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
      /><br />
      <input type="submit" id="create-account-btn" value="CREATE ACCOUNT" />
    </form>
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

#signup-form {
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#password,
#username,
#email,
#confirm-password,
#create-account-btn {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.56);
  border-style: none;
  font-size: large;
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
  background-color: #185359;
  color: white;
  font-size: 20px;
  margin-top: 10px;
}

@media only screen and (min-width: 769px) {
  #password,
  #username,
  #email,
  #confirm-password,
  #create-account-btn {
    height: 50px;
  }

  #signup-form label {
    font-size: 20px;
  }
}
</style>
