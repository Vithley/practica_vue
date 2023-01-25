import { RouteLocation} from "vue-router";

/* eslint-disable @typescript-eslint/no-explicit-any */
const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next:any) => {
    console.log(to, from, next)

    const useRole = localStorage.getItem("useRole");

    if(useRole === "Admin") {
        next();
    } else {
        alert('No eres admin! No puedes pasar')
        next({name: 'auth'})
    }
}


export default haveRoleGuard;