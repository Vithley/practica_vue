import { createStore } from 'vuex'
import { Products } from '../models/products';
import productModule from './product/index';

export interface IState {
  product: Products | null; 
  greeting: string;
}

export default createStore<IState>({
  state: {
    product: null,
    greeting: 'Hola'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product : productModule
  }
})
