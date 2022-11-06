<template>
  <main>
    <p id="info-txt">
      Do you want to save your progress or create you own quiz?
    </p>
    <p id="urging-txt">Log in or create a new account!</p>
    <RouterLink to="/login">
      <button class="button1">Log in</button>
    </RouterLink>
    <RouterLink to="/signup">
      <button class="button1">Create account</button>
    </RouterLink>
    <RouterLink to="/language">
      <button class="button2">No thanks! Not now</button>
    </RouterLink>
  </main>
</template>

<script setup>
import { useTheme } from "../stores/theme";
const theme = useTheme();
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#info-txt {
  font-size: 20px;
  max-width: 300px;
  text-align: center;
}

#urging-txt {
  margin-top: 0px;
  font-size: 15px;
  font-style: italic;
  max-width: 250px;
  text-align: center;
}

button {
  border-radius: 10px;
  cursor: pointer;
  font-size: large;
  width: 200px;
  height: 50px;
  transition: all 0.3s;
  border: 1px solid;
  border-color: v-bind("theme.theme.fieldColor");
  box-shadow: 0 2px 3px rgba(10, 10, 10, 10);
}

.button1 {
  background-color: v-bind("theme.theme.footerBackgroundColor");
  color: v-bind("theme.theme.color");
  font-weight: 500;
}

.button2 {
  color: v-bind("theme.theme.color");
  color: black;
  font-weight: 500;
  font-size: smaller;
  width: 170px;
  height: 40px;
}

button:hover {
  transform: translateY(4px);
  cursor: pointer;
}

.button2:hover {
  transform: translateY(4px);
  cursor: pointer;
}

.button1:hover {
  transform: translateY(4px);
  cursor: pointer;
}

@media only screen and (min-width: 769px) {
  #info-txt {
    max-width: 450px;
    font-size: 30px;
  }

  #urging-txt {
    font-size: 25px;
  }
  button {
    border-radius: 10px;
    font-size: 25px;
    width: 300px;
    height: 60px;
  }
  .button2 {
    font-size: 20px;
    width: 200px;
    height: 50px;
  }
}
</style>
