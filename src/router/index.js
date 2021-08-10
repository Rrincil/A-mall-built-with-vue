import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import FrontPage from '../components/Body/FrontPage/FrontPage.vue'

const routes = [
  {
    path: '',
    redirect: '/FrontPage'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,FrontPage,
    children:[
      {
        path:'/FrontPage',
        name:'FrontPage',
        component: ()=>import ('../components/Body/FrontPage/FrontPage.vue')
      },
      {
      path:'/AllProducts',
      name:'AllProducts',
      component: ()=>import ('../components/Body/AllProducts/AllProducts.vue')        
      }
    ]

   
  },
  {
    path:'/Login',
    name:'Login',
    component: ()=>import ('../views/Login/Login.vue')
  },
  {
    path:'/Regist',
    name:'Regist',
    component: ()=>import ('../views/Regist/Regist.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
