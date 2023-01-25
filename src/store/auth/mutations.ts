
import { IAuthState } from './state';
import { Auth } from '../../models/users';
import { MutationTree } from 'vuex';


const mutations: MutationTree<IAuthState> = {
    setAuth(state, auth: Auth[]) {
        state.auth = auth;
    }
}

export default mutations;


    
  
