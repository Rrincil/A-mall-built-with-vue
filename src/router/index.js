import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import FrontPage from '../components/Body/FrontPage/FrontPage.vue'
import basicinfo from '../views/Login/loginInfo/account/basicinfo.vue'
import accountInfo from '../views/Login/loginInfo/account/accountInfo.vue'
import HeadTop from '../components/HeadTop/HeadTop.vue'
const routes = [
  {
    path: '',
    redirect: '/FrontPage'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/AllProducts',
        name:'AllProducts',
        component: ()=>import ('../components/Body/AllProducts/AllProducts.vue')        
      },
      {
        path:'/FrontPage',
        name:'FrontPage',
        component: ()=>import('../components/Body/FrontPage/FrontPage.vue')      
      },
      //搜索框
      {
        path:'/searchBar',
        name:'searchBar',
        component: ()=>import ('../components/searchBar/searchBar.vue')
      },
      //产品预览
      {
        path:'/productView',
        name:'productView',
        component: ()=>import ('../components/productView/productView.vue')        
      },
      //个人信息路由       
      {
        path:'/cart',
        name:'cart',
        component: ()=>import ('../views/Login/loginInfo/cart/cart.vue'),        
      }, 
      {
        path:'/accountInfo',
        name:'accountInfo',
        component:accountInfo,basicinfo,
        children:[
          {
            path:'/basicinfo',
            name:'basicinfo',
            component: ()=>import ('../views/Login/loginInfo/account/basicinfo.vue'),    
                  
          },
          {
            path:'/wallet',
            name:'wallet',
            component: ()=>import ('../views/Login/loginInfo/account/wallet.vue'),    
                  
          },     
          {
            path:'/favorites',
            name:'favorites',
            component: ()=>import ('../views/Login/loginInfo/account/favorites.vue'),    
                  
          },
          {
            path:'/secretcode',
            name:'secretcode',
            component: ()=>import ('../views/Login/loginInfo/account/secretcode.vue'),    
                  
          },
          {
            path:'/bank',
            name:'bank',
            component: ()=>import ('../views/Login/loginInfo/account/bank.vue'),    
                  
          },                  
        ]
      },
      {
        path:'/order',
        name:'order',
        component: ()=>import ('../views/Login/loginInfo/order/order.vue'),        
      },          
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
  },
]

const router = createRouter({
  // mode:'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//路由守卫
// router.beforeEach((to, from, next) => {
//   const islogin = localStorage.eletoken ? true :false;

//   if(!islogin){
//     next();
//   }else{
//     if(to.path=='/login'||to.path=='/regist'){
//       next('/loginInfo');
//     }else{
//       next();
//     }   
//   }
//   //解析token npm install jwt-decode
// })
export default router
