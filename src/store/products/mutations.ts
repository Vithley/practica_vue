import { MutationTree } from "vuex";
import { IProductState } from "./state";
import { Products } from "../../models/products";

const mutations: MutationTree<IProductState> = {
  setProducts(state: IProductState, product: Products[]) {
    state.product = product;
  },

  setIsLoading(state: IProductState, value: boolean) {
    state.isLoading = value;
  },

  setSelectedProduct(state, product: Products) {
    state.selectedProduct = product;
  },
};

export default mutations;
