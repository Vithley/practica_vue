import { GetterTree } from 'vuex';
import { IAuthState } from './state';
import { IState } from '../index';



const getters: GetterTree<IAuthState, IState> = {
    getAuth(state) {
        return state.auth
    }
}

export default getters;