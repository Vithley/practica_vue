import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import haveRoleGuard from "./role_guards";

const routes: Array<RouteRecordRaw> = [
  // Ruta para mostrar todos los productos
  {
    path: "/",
    name: "products",
    beforeEnter: [haveRoleGuard],
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsView.vue"),
  },

  // Ruta para mostrar un producto
  {
    path: "/detail/:id",
    name: "detail",
    beforeEnter: [haveRoleGuard],

    component: () =>
      import(/* webpackChunkName: "ProductView" */ "../views/ProductView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: null } : { id };
    },
  },

  // Ruta para el perfil de usuario
  {
    path: "/profile",
    name: "profile",
    beforeEnter: [haveRoleGuard],
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },

  // Ruta para el Login
  {
    path: "/auth",
    name: "auth",
    component: () =>
      import(/* webpackChunkName: "Auth Layout" */ "../views/LoginView.vue"),
  },

  // Ruta si la ruta no existe
  {
    path: "/pathMatch(.*)",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
