import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductState } from "./state";
import fakeShopApi from "@/api/fakeShopApi";
import { AxiosResponse } from "axios";
import { Products } from "@/models/products";


const actions: ActionTree<IProductState, IState> = {
  // Llamamos a la API para obtener los productos
  async fetchProducts({ commit }) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products[]>>(
      `/products/`
    ); //?offset=0&limit=9
    commit("setIsLoading", false);
    commit("setProducts", data);
   
  },

  // Llamamos a la API para obtener el producto por su Id
  async fetchProductId({ commit }, productId: number) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products>>(
      `/products/${productId}`
    );
    commit("setIsLoading", false);
    commit("setSelectedProduct", data);
  },

  // Llamamos a la API para poder buscar el producto por su nombre
  async searchProduct({ commit }, productName: string) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products>>(
      `/products/?title=${productName}`
    );
    commit("setIsLoading", false);
    commit("setProducts", data);
  },

};

export default actions;
