import { Auth } from "@/models/auth";
import { Token } from '../../models/token';

export interface IAuthState {
    auth: Auth | null;
    isLoading: boolean;
    token: Token | null;
    
    
   
}

function state(): IAuthState {
    return {
        auth: null,
        isLoading: false,
        token: null
        
        
        
    }
}

export default state;