import { RouteLocation} from "vue-router";

/* eslint-disable @typescript-eslint/no-explicit-any */
const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next:any) => {
    //console.log(to, from, next)

    const useRole = localStorage.getItem("token");

    if(useRole) {
        next();
    } else {
        alert('No tienes permisos, serás redirigido al Login!')
        next({name: 'auth'})
    }
}


export default haveRoleGuard;