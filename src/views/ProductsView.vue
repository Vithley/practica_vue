<template>
    <div class="product">
        <div v-if="isLoading">
            Cargando...
        </div>

        <div v-else>
            <div class="container text-center">
                <div class="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-3 row-cols-xxl-3 ml-md-auto">  
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
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
            <span class="page-link">
                2
                <span class="sr-only">(current)</span>
            </span>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import fakeShopApi from '@/api/fakeShopApi';
import { Products } from '../models/products';
import { AxiosResponse } from 'axios';
import useProducts from '../composables/useProducts';
import ProductItem from '@/components/ProductItem.vue';
import { useRouter } from 'vue-router';


export default {
    name: "ProductsView",
    components: {
        ProductItem
    },

    setup() {
        fakeShopApi.get<unknown, AxiosResponse<Products[]>>('/products').then(resp => console.log(resp.data))
        const {products, isLoading, fetchProducts} = useProducts();
        const router = useRouter();
        fetchProducts();
        return{
            products, 
            isLoading, 
            goDetail: (product: Products) => router.push({name: 'detail', params: {id: product.id}})}
    }
}
</script>

<style scoped>

    .row_padding  {
        margin-top: 40px;
        margin-right: 60px;
        margin-left: 60px;
    }
</style>>