import { Products } from "../../models/products";
export interface IProductState {
  product: Products[];
  isLoading: boolean;
  selectedProduct: Products | null;
}

function state(): IProductState {
  return {
    product: [],
    isLoading: false,
    selectedProduct: null,
  };
}

export default state;
