import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const Promotion = () => import('views/promotion/Promotion');
const Order = () => import('views/order/Order');
const Profile = () => import('views/profile/Profile');
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/promotion',
    name: 'Promotion',
    children: [
      {
        path: 'register',
        name: 'PromotionRegister',
        component: () => import('views/promotion/childComps/PromotionRegister')
      }
    ],
    component: Promotion
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//判断登录状态，携带
router.beforeEach((to,from,next)=>{
  console.log(to)
  next()
})

export default router
