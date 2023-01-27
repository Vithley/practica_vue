import { MutationTree } from "vuex";
import { IProductState } from "./state";
import { Products } from "../../models/products";

const mutations: MutationTree<IProductState> = {
  // Mutación para añadir los productos en el state
  setProducts(state: IProductState, product: Products[]) {
    state.product = product;
  },

  // Mutación para saber si carga los datos
  setIsLoading(state: IProductState, value: boolean) {
    state.isLoading = value;
  },
  
  // Mutación para seleccionar un producto
  setSelectedProduct(state, product: Products) {
    state.selectedProduct = product;
  },
  
};

export default mutations;
