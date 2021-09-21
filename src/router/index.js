import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import { getCookie } from '../utils/cookieUtils'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'searchchild',
        name:'SearchChild',
        component:()=>import('../pages/home/components/SearchChild.vue')
      }
    ]
  },
  { 
    path: '/topic',
    name: 'Topic',
    component: ()=>import('../pages/topic/Topic.vue')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: ()=>import('../pages/sort/Sort.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component:  ()=>import('../pages/cart/Cart.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: ()=>import('../pages/my/My.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局前置守卫
router.beforeEach((to,from,next)=>{

  if(to.path === '/cart'){
    const token = getCookie('token');
    if(token){
      next()
    }else{
      //!this当前没有  Vue.prototype可以替换组件中的this
      Vue.prototype.$toast.fail("请先登录");
      //定时器
      next('/my')
    }
  }

  next()
})


export default router
