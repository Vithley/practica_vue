<template>
    <form class="d-flex" role="search">
        <input
            v-model="search" 
            class="form-control me-2" 
            type="search" placeholder="Search" 
            aria-label="Search" 
        />
        <button @click="searchProduct(search)" class="btn btn-outline-success">Search</button>
    </form>
</template>


<script lang="ts">
import useProducts from "@/composables/useProducts"
import { defineComponent } from "@vue/runtime-core"
import { ref } from "vue";



export default defineComponent( {
    name: 'SearchProduct',

    setup() {
        const search = ref("")
        const {searchProduct} = useProducts();
      
       
        return {
         searchProduct, 
         search
            
        }
    }

})
</script>
