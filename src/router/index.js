import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Login'
import register from '@/views/Login/register.vue'



Vue.use(VueRouter)

const routes = [
  Login,
  {
    name:"222",
    path:'/',
    // component:Login,
    redirect:'/index'
  },
  {
    name:"111",
    path:'/register',
    component:register
  }

  // {
  //   path:'/',
  //   component:Login,
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
