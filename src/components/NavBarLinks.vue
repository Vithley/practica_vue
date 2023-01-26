<template>
  <nav class="navbar navbar-expand-lg color-nav">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'products' }"
              >Productos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'profile' }"
              >Perfil</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-none"
              :to="{ name: 'detail', params: { id: 1 } }"
              >Detalles</router-link
            >
          </li>
        </ul>
        <ul lass="navbar-nav">
          <li class="nav-item">
            <router-link @click="logout" class="nav-link float-right" :to="{}"
              ><i
                class="fa-solid fa-right-from-bracket"
                title="Log Out"
                style="font-size: 40px; color: grey"
              ></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import useAuth from "@/composables/useAuth";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBarLinks",

  setup() {
    // Borramos el token para salir de la página y que nos vuelva al login
    const { deleteToken } = useAuth();

    const logout = () => {
      deleteToken();
    };

    return {
      logout,
    };
  },
});
</script>

<style scoped>
.color-nav {
  background-color: white;
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
>
