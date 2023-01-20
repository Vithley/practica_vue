import { computed } from "vue";
import { useStore } from "vuex";

const useProducts= () => {
    const store = useStore();
    
    return {
        // Obtengo los Getters
        products: computed(()=> store.getters['product/getProduct']),
        isLoading: computed(() => store.getters['product/getIsLoading']),

        // Actions
        fetchProducts: () => store.dispatch('product/fetchProducts')

    }
}

export default useProducts;