import { GetterTree } from "vuex";
import { IProductState } from "./state";
import { IState } from "../index";

const getters: GetterTree<IProductState, IState> = {
  getProduct(state) {
    return state.product;
  },

  getIsLoading(state) {
    return state.isLoading;
  },

  getProducts(state) {
    return state.selectedProduct;
  },
};

export default getters;
