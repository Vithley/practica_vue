import { createStore } from "vuex";
import { Products } from "../models/products";
import productModule from "./products/index";
import authModule from "./auth/index";

export interface IState {
  product: Products | null;
}

export default createStore<IState>({
  state: {
    product: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    product: productModule,
    auth: authModule,
  },
});
