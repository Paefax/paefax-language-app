<template>
  <div class="container">
    <div class="row">
      <div class="footer-col">
        <ul>
          <li>
            <img src="../assets/images/logo.svg" alt="logo" />
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="#">Quiz-App</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Created by</h4>
        <ul>
          <li><a href="https://github.com/helenahalldiniths">Helena</a></li>
          <li><a href="https://github.com/Philippevial">Philippe</a></li>
          <li><a href="https://github.com/FelixJacobsen">Felix</a></li>
          <li><a href="https://github.com/ErikssonF">Fredrik</a></li>
          <li><a href="https://github.com/LordRekishi">Patrik</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help and support</h4>
        <ul>
          <li><a href="mailto:felix.jacobsen@iths.se">Email Us</a></li>
          <li><a href="#">Common questions</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright-label">
      <label>© Copyright 2022 Paefax. All rights reserved.</label>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
.copyright-label {
  text-align: center;
  font-weight: 500;
  color: #bbbbbb;
  margin-top: 2vw;
}
.container {
  background-image: linear-gradient(#247680, #185359);
  width: 100vw;
  position: relative;
  margin-top: 28vw;
}
ul {
  list-style: none;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
img {
  margin-top: 5vw;
  margin-left: 5vw;
  width: 150px;
}
.footer-col {
  width: 25%;
}

.footer-col h4 {
  font-size: 19px;
  color: #bbbbbb;
  text-transform: capitalize;
  margin-bottom: 30px;
  font-weight: 00;
  position: relative;
  margin-top: 2vw;
}

.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
}

.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 10px;
}

/* Media queries */

@media (min-width: 768px) {
}

@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }

  .footer-col {
    padding-left: 30px;
  }
}

@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
  img {
    display: none;
  }
}
</style>
