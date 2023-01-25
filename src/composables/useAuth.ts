import { computed } from 'vue';
import { useStore } from 'vuex';



const useAuth = () => {
    const store = useStore();

    
    return {
        //Getters
       auth: computed(()=> store.getters['auth/getAuth']),

       //Actions 
       fetchAuth: () => store.dispatch('auth/fecthAuth')
          
    }
}

export default useAuth;