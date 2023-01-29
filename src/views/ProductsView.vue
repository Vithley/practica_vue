<template>
  <NavBarLinks />
  <div class="product">
    <div v-if="isLoading">Cargando...</div>

    <div v-else>
      <SearchProduct />
      <div class="container text-center">
        <div
          class="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-3 row-cols-xxl-3 ml-md-auto"
        >
          <ProductItem
            class="row_padding"
            v-for="product in products"
            :key="product.id"
            :products="product"
            @goDetail="goDetail"
          />
        </div>
      </div>
    </div>
  </div>

  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <span class="page-link">Previous</span>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Products } from "../models/products";
import useProducts from "../composables/useProducts";
import ProductItem from "@/components/ProductItem.vue";
import { useRouter } from "vue-router";
import SearchProduct from "@/components/SearchProduct.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";

export default {
  name: "ProductsView",
  components: {
    ProductItem,
    SearchProduct,
    NavBarLinks,
  },

  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const router = useRouter();
    fetchProducts();
    

    return {
      products,
      isLoading,
      goDetail: (product: Products) =>
        router.push({ name: "detail", params: { id: product.id } }),
      page: 1,
      characters: [],
      pages: 1
    };
  },
};
</script>

<style scoped>
.row_padding {
  margin-top: 40px;
  margin-right: 60px;
  margin-left: 60px;
}
</style>
>
