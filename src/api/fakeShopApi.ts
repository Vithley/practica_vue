import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";

// Creamos una ruta para la url de la API
const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",

});

fakeShopApi.interceptors.request.use((config: AxiosRequestConfig)=>{
  //Cogemos el token del localStorage 
  const token = localStorage.getItem('token');
  if (token){
      //En la web de la API que usamos especifican como conseguir el usuario con sesión -> En la cabecera (apartado Auth JWT de fakeapi.platzi.com/en/rest)
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); //JWT
  }

  return config;
});


export default fakeShopApi;