<template>
  <main>
    <h1>Contact</h1>
    <div id="contact-form">
      <label for="message">Message:</label>
      <textarea id="message" name="message" v-model="message"></textarea>
      <p id="information">
        Note: This requires a default e-mail client software installed on your
        computer. If you don't have this but you wish to contact us you can send
        an email to helena.halldin@hotmail.com with you question or problem.
      </p>
      <button @click="sendMail" id="contact-btn">SUBMIT</button>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useTheme } from "../stores/theme";

const theme = useTheme();
const message = ref("");
const mailto = computed(
  () =>
    "mailto:helena.halldin@hotmail.com? &subject=Contact via form - Paefax &body=" +
    message.value
);
const sendMail = () => {
  window.location = mailto.value;
  message.value = "";
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

#contact-form {
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
  background-color: v-bind('theme.theme.footerBackgroundColor');
  color: v-bind('theme.theme.color');
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

#information {
  font-size: 12px;
  font-style: italic;
}

@media only screen and (min-width: 769px) {
  #contact-form {
    max-width: 500px;
  }

  #message {
    height: 250px;
  }

  #contact-form label {
    font-size: large;
  }

  #information {
    font-size: 14px;
    font-style: italic;
  }
}
</style>
