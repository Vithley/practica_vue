import { computed } from 'vue';
import { useStore } from 'vuex';
import { Auth } from '@/models/auth';


const useAuth = () => {
    const store = useStore();
    
    return {
        //Getters
       auth: computed(() => store.getters['auth/getAuth']),
       isLoading: computed(() => store.getters["auth/getIsLoading"]),
       getUser: computed(() => store.getters['auth/getUser']),

       //Actions 
       fecthAuth: (data: Auth) => store.dispatch('auth/fecthAuth', data),
       fetchUser: (token: string) => store.dispatch('auth/fetchUser', token),
       deleteToken: () => store.dispatch('auth/deleteToken')
       
          
    }
}

export default useAuth;