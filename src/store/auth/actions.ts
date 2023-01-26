import { ActionTree } from 'vuex';
import { IAuthState } from './state';
import { IState } from '..';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';
import router from '@/router';
import { Auth } from '@/models/auth';
import { Users } from '@/models/users';


const actions: ActionTree<IAuthState, IState> = {
    // Función para logearnos 
    async fecthAuth({commit}, auth: Auth){

        try{
            const { data } = await fakeShopApi.post('/auth/login', auth);
            commit('setToken', data);
            // Guardo el token en el localStorage y vamos a home
            localStorage.setItem('token', data.access_token);
            router.push({name: 'home'})
        
        } catch(err:any) {
            console.log(err.message)
            alert('Usuario no autorizado')

        }
    },

    //Función para mostrar usuario con el que nos logueamos
    async fetchUser({commit}, token: string){
        commit('setIsLoading', true);
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Users>>('/auth/profile');
        commit('setIsLoading', false);
        commit('setUser', data);
        localStorage.setItem('name', data.name)
    },

    // Función para borrar el token 
    deleteToken({commit}) {
        commit('deleteToken');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        router.push({name: 'auth'});
    }

   
}

export default actions