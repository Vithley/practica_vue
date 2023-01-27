<template>
  <form class="d-flex" role="search">
    <input
      v-model.lazy="search"
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      minlength="3"
    />
    <button
      type="button"
      @click="validateSearch"
      class="btn btn-outline-success"
    >
      Search
    </button>
  </form>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  name: "SearchProduct",

  setup() {
    const { searchProduct, products } = useProducts();
    const search = ref("");
    const productsAll = products.value;

    // Comprobamos que el buscador no acepte menos de tres letras para hacer su búsqueda
    const validateSearch = () => {
      if (search.value.length < 3) {
        alert("Por favor, ingresa mínimo tres letras");
      } else {
        const filterProduct =
          search.value.charAt(0).toUpperCase() + search.value.slice(1);
        for (let i = 0; i < productsAll.length; i++) {
          if (productsAll[i].title.includes(filterProduct)) {
            const titleProduct = productsAll[i].title.split(" ");
            for (let j = 0; j < titleProduct.length; j++) {
              if (titleProduct[j].includes(filterProduct)) {
                searchProduct(titleProduct[j]);
              }
            }
          }
        }
      }
    };

    return {
      searchProduct,
      search,
      validateSearch,
    };
  },
});
</script>
