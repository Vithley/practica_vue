import { computed } from "vue";
import { useStore } from "vuex";

const useProducts= () => {
    const store = useStore();
   
    
    return {
        // Getters
        products: computed(()=> store.getters['product/getProduct']),
        isLoading: computed(() => store.getters['product/getIsLoading']),
        product: computed(() => store.getters["product/getProducts"]),
        userImages: computed(() => store.getters['product/getSelectedProductImage']),

        // Actions
        fetchProducts: () => store.dispatch('product/fetchProducts'),
        fetchProductId: (productId: number) => {
            store.dispatch("product/fetchProductId", productId)
        },
        searchProduct: (productName: string) => {
            store.dispatch("product/searchProduct", productName)
        }

    }
}

export default useProducts;