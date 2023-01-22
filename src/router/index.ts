import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => 
      import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
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
      import(/* webpackChunkName: "about" */ '../views/Profile.vue'),

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
