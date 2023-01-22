import { computed } from "vue";
import { useStore } from "vuex";

const useProducts= () => {
    const store = useStore();
    
    return {
        // Obtengo los Getters
        products: computed(()=> store.getters['product/getProduct']),
        isLoading: computed(() => store.getters['product/getIsLoading']),
        product: computed(() => store.getters["product/getProducts"]),

        // Actions
        fetchProducts: () => store.dispatch('product/fetchProducts'),
        fetchProductId: (productId: number) => {
            store.dispatch("product/fetchProductId", productId)
        }

    }
}

export default useProducts;