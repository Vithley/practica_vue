import { Module } from 'vuex';
import { ITokenState } from './state';
import { IState } from '../index';
import state from './state';


const tokenModule: Module<ITokenState, IState> = {
    namespaced: true,
    state
}

export default tokenModule