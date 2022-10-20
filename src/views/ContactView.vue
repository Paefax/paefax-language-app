<template>
  <main>
    <h1>Contact</h1>
    <form id="contact-form">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <input type="submit" id="contact-btn" value="SUBMIT" />
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

#contact-form {
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#email,
#message,
#contact-btn {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.56);
  border-style: none;
}

#message {
  height: 200px;
}

#contact-btn {
  background-color: #185359;
  color: white;
  font-size: 20px;
  margin-top: 50px;
}

#contact-form label {
  width: 100%;
  padding: 10px 0px;
}

#contact-form input,
textarea {
  font-size: large;
  padding-left: 10px;
}

@media only screen and (min-width: 769px) {
  #email,
  #contact-btn {
    height: 50px;
  }

  #message {
    height: 150px;
  }
}
</style>
