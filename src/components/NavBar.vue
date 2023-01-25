<template>
<nav class="navbar navbar-expand-lg color-nav">
  <div class="container-fluid ">
    <img class="logo" src="../assets/logo.png"/>
    <h2 class="fake"><router-link class="nav-link" :to="{name: 'home'}">FakeShop</router-link></h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'products'}">Productos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'profile'}">Perfil</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link d-none" :to="{name: 'detail', params: {id: 1}}">Detalles</router-link>
            </li>
      </ul>
      
      
    </div>
  </div>
</nav>
</template>


<script lang="ts">
export default {
    name: "NavBar",

}
</script>

<style scoped>

    .color-nav {
        background-color: #79dab9;
        color: grey;
        font-family: 'Pacifico', cursive;
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
        font-family: 'Pacifico', cursive;
        font-size: 18px;
    }
</style>>
