import { ActionTree } from 'vuex';
import { IAuthState } from './state';
import { IState } from '../index';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';
import { Auth } from '@/models/users';
import { Credentials } from '@/interfaces/credentials';


const actions: ActionTree<IAuthState, IState> = {
    async fecthAuth({commit}, Credentials){

        const {data} = await fakeShopApi.post<unknown, AxiosResponse<Auth[]>>(`/auth/login${Credentials}`);

        commit('setAuth', data)
    },

   
}

export default actions