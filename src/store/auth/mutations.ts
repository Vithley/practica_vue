import { IAuthState } from "./state";
import { MutationTree } from "vuex";
import { Token } from "@/models/token";
import { Users } from "@/models/users";

const mutations: MutationTree<IAuthState> = {
  // Añado el token al state
  setToken(state: IAuthState, token: Token) {
    state.token = token;
  },

  // Añadimos el usuario con permisos al state
  setUser(state: IAuthState, auth: Users) {
    state.auth = auth;
  },

  // Sabemos si está cargando  la petición
  setIsLoading(state: IAuthState, value: boolean) {
    state.isLoading = value;
  },

  deleteToken(state: IAuthState) {
    state.token = null;
  },
};

export default mutations;
