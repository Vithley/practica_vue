<template>
    <div class="product">
        <div v-if="isLoading">
            Cargando...
        </div>
        <div v-else>
            <div v-for="product in products" :key="product.id">
                {{ product.title }} 
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import fakeShopApi from '@/api/fakeShopApi';
import { Products } from '../models/products';
import { AxiosResponse } from 'axios';
import useProducts from '../composables/useProducts';
export default {
    name: "ProductsView",

    setup() {
        fakeShopApi.get<unknown, AxiosResponse<Products[]>>('/products').then(resp => console.log(resp.data))
        const {products, isLoading, fetchProducts} = useProducts();
        fetchProducts();
        return{products, isLoading}
    }
}
</script>

<style scoped>

</style>>