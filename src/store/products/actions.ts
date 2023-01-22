import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductState } from './state';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';
import { Products } from "@/models/products";

const actions: ActionTree<IProductState, IState> = {
    async fetchProducts({commit}) {
        commit('setIsLoading', true);
        
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Products[]>>(`/products`);
        commit('setIsLoading', false);
        commit('setProducts', data);

    },
    async fetchProductId({ commit }, productId: number) {
        // usamos la mutación para poner isLoading = true
        commit("setIsLoading", true);
    
        // obtenemos los datos de manera asíncrona
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Products>>(
          `/products/${productId}`
        );
    
        // usamos la mutación para poner isLoading = false
        commit("setIsLoading", false);
    
        // usamos la mutación para volcar los datos obtenidos en la variable del state users
        commit("setSelectedProduct", data);
      },
}

export default actions;