import { Module } from "vuex";
import { IState } from "..";
import state, { IAuthState } from './state';
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const authModule : Module<IAuthState, IState> = {
    namespaced: true,
    state, 
    getters,
    mutations, 
    actions

}

export default authModule;