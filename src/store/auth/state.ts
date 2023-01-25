import { Auth } from "@/models/users";

export interface IAuthState {
    auth: Auth[];
    status: string,
    access_token: null,
    email: string,
    password: string
    
    
   
}

function state(): IAuthState {
    return {
        auth: [],
        status: 'Authorization',
        access_token: null,
        email: " ",
        password: " "
        
        
        
    }
}

export default state;