<template>
  <Slide right noOverlay :closeOnNavigation="true">
    <nav class="menu-options">
      <div class="menu-item">
        <RouterLink to="/account">
          Account
          <AccountCircleOutline class="menu-item-img" />
        </RouterLink>
      </div>

      <div class="menu-item">
        <RouterLink to="/settings">
          Settings
          <CogOutline class="menu-item-img" />
        </RouterLink>
      </div>

      <div class="menu-item">
        <RouterLink to="/language">
          Quiz
          <AlphaQCircleOutline class="menu-item-img" />
        </RouterLink>
      </div>

      <div class="menu-item">
        <RouterLink to="/contact">
          Contact
          <EmailOutline class="menu-item-img" />
        </RouterLink>
      </div>
    </nav>
  </Slide>
</template>

<script setup>
import { Slide } from "vue3-burger-menu";
import AccountCircleOutline from "vue-material-design-icons/AccountCircleOutline.vue";
import CogOutline from "vue-material-design-icons/CogOutline.vue";
import AlphaQCircleOutline from "vue-material-design-icons/AlphaQCircleOutline.vue";
import EmailOutline from "vue-material-design-icons/EmailOutline.vue";
import { useTheme } from "../stores/theme";

const theme = useTheme();
const isOpen = false;

</script>

<style>
img {
  width: 40%;
}

.menu-item {
  margin: 10px;
}

.menu-item-img {
  margin-bottom: 10px;
  padding-left: 20px;
  position: absolute;
}

a {
  color: #e9ecfc;
  text-decoration: none;
  padding: 10px;
}

.bm-burger-bars {
  background-color: v-bind('theme.theme.color');

}

.line-style {
  height: 15%;
}

.bm-burger-button {
  position: relative;
  left: 0;
  margin-right: 25px;
}

.bm-menu {
  background-image: linear-gradient(#247680, #185359);
  display: flex;
}

.menu-options {
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  gap: 35px;
}
</style>
