import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductState } from "./state";
import fakeShopApi from "@/api/fakeShopApi";
import { AxiosResponse } from "axios";
import { Products } from "@/models/products";

const actions: ActionTree<IProductState, IState> = {
  async fetchProducts({ commit }) {
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products[]>>(
      `/products/`
    ); //?offset=0&limit=9
    commit("setIsLoading", false);
    commit("setProducts", data);
  },
  async fetchProductId({ commit }, productId: number) {
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products>>(
      `/products/${productId}`
    );

    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setSelectedProduct", data);
  },

  async searchProduct({ commit }, productName: string) {
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products>>(
      `/products/?title=${productName}`
    );

    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setProducts", data);
  },
};

export default actions;
