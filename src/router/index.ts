import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveRoleGuard from './role_guards';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
   
    component: () => 
      import(/* webpackChunkName: "ProductView" */ '../views/ProductView.vue'),
      props: (route) => {
        const id = Number(route.params.id)
        return isNaN(id) ? { id: null} : { id };
      }
      

  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => 
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),

  },
  {
    path: '/auth',
    name: 'auth',
    component: () =>
    import(/* webpackChunkName: "Auth Layout" */ '../views/LoginView.vue'),
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
