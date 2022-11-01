<template>
  <Slide right noOverlay :closeOnNavigation="true">
    <nav class="menu-options">
      <div class="menu-item" v-show="loggedIn">
        <RouterLink to="/account">
          Account
          <AccountCircleOutline class="menu-item-img" />
        </RouterLink>
      </div>

      <div class="menu-item">
        <RouterLink to="/settings" v-show="loggedIn">
          Settings
          <CogOutline class="menu-item-img" />
        </RouterLink>
      </div>

      <div class="menu-item">
        <RouterLink to="/language">
          Quiz <AlphaQCircleOutline class="menu-item-img" />
        </RouterLink>
      </div>

      <div class="menu-item">
        <RouterLink to="/contact">
          Contact <EmailOutline class="menu-item-img"
        /></RouterLink>
      </div>

      <div class="menu-item" v-show="loggedIn">
        <RouterLink to="/" @click="logout">
          Logout <AccountArrowLeftOutline class="menu-item-img"
        /></RouterLink>
      </div>

      <div class="menu-item" v-show="!loggedIn">
        <RouterLink to="/login">
          Log in <AccountArrowUpOutline class="menu-item-img"
        /></RouterLink>
      </div>

      <div class="menu-item" v-show="!loggedIn">
        <RouterLink to="/signup">
          Create account <AccountPlusOutline class="menu-item-img"
        /></RouterLink>
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
import AccountArrowLeftOutline from "vue-material-design-icons/AccountArrowLeftOutline.vue";
import { useUserStore } from "../stores/user";
import AccountArrowUpOutline from "vue-material-design-icons/AccountArrowUpOutline.vue";
import AccountPlusOutline from "vue-material-design-icons/AccountPlusOutline.vue";
import { computed } from "vue";
const userInfo = useUserStore();
const loggedIn = computed(() => userInfo.loggedIn);

const logout = () => {
  const url = "http://localhost:3000/user/logout";

  fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  localStorage.clear();
  console.log("logged out");
  userInfo.removeProgress();
  userInfo.isLoggedIn(false);
};
</script>

<style>
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
  background-color: #e9ecfc;
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
