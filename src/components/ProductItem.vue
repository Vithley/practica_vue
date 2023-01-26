<template>
  <div class="card" style="width: 18rem">
    <img :src="products.images" :alt="products.title" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ products.title }}</h5>
      <p class="card-text">{{ products.description }}</p>
      <p>{{ products.price }}€</p>
      <button class="btn color-btn" @click="$emit('goDetail', products)">
        Saber más
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Products } from "@/models/products";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    products: {
      type: Object as PropType<Products>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.color-btn {
  background-color: #79dab9;
}
</style>
