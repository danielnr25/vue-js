import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/* Imports of the view */
import Crear from "../components/CrearView.vue";
import Listar from "../components/ListarView.vue";
import Editar from "../components/EditarView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crear',
    component: Crear
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: Editar
  },
  {
    path: '/listar',
    name: 'listar',
    component: Listar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
