<template>
  <table class="content-table">
    <thead>
      <tr>
        <th>Word</th>
        <th>Your answer</th>
        <th>Correct answer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Word1</td>
        <td>Word1</td>
        <td>Word1</td>
      </tr>
      <tr>
        <td>Word2</td>
        <td>Word2</td>
        <td>Word2</td>
      </tr>
      <tr>
        <td>Word3</td>
        <td>Word3</td>
        <td>Word3</td>
      </tr>
      <tr>
        <td>Word4</td>
        <td>Word4</td>
        <td>Word4</td>
      </tr>
      <tr>
        <td>Word5</td>
        <td>Word5</td>
        <td>Word5</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>

<style scoped>
.content-table {
  margin: 25px 0;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background: white;
  color: black;
}

.content-table thead tr {
  background-color: #185359;
  color: #fff;
  text-align: center;
}

.content-table th,
.content-table td {
  padding: 12px 25px;
  text-align: center;
}
</style>
