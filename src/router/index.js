import Vue from 'vue'
import VueRouter from 'vue-router'
import layoutPrincipal from '../layout/layoutPrincipal'
import login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: layoutPrincipal,
    children:[
      {path:'',name:'Principal',component: () => import(/* webpackChunkName: "principal" */ '@/views/Principal.vue')},
      {path:'/listadoPrestamos',name:'Prestamos',component: () => import(/* webpackChunkName: "prestamos" */ '@/views/Prestamos.vue')},
      {path:'/libro/:id',name:'detalleLibro',component: () => import(/* webpackChunkName: "deatlleLibro" */ '@/views/detalleLibro.vue')}
    ]
  },{
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
