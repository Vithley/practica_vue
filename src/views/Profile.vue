<template>
    <div v-if="product">
        <h1>Nonbre: {{ product.title }}</h1>
    </div>
   
</template>

<script lang="ts">

import useProducts from '@/composables/useProducts';
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "ProfileView",

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    setup(props){
        const {product, fetchProductId, isLoading} = useProducts();
        fetchProductId(props.id);

        return{
            product,
            isLoading
        }
    }

})
</script>

<style scoped>

</style>>