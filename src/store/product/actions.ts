import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductState } from './state';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';
import { Products } from "@/models/products";

const actions: ActionTree<IProductState, IState> = {
    async fetchProducts({commit}) {
        commit('setIsLoading', true);
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Products[]>>("/products");
        commit('setIsLoading', false);
        commit('setProducts', data);

    }
}

export default actions;