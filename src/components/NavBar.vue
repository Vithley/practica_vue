<template>
  <nav class="navbar navbar-expand-lg color-nav">
    <div class="container-fluid">
      <img class="logo" src="../assets/logo.png" />
      <h3>FakeShop</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <nav-bar-links />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
});
</script>

<style scoped>
.color-nav {
  background-color: #79dab9;
  color: grey;
  font-family: "Pacifico", cursive;
}

.logo {
  width: 16vh;
  height: 16vh;
}

.fake {
  padding-left: 10px;
}

li {
  color: grey;
  font-family: "Pacifico", cursive;
  font-size: 18px;
  list-style: none;
}
</style>

