import Vue
  from 'vue'
import VueRouter
  from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const Promotion = () => import('views/promotion/Promotion');
const Order = () => import('views/order/Order');
const Profile = () => import('views/profile/Profile');
const PromotionRegister = () => import('views/promotion/childComps/PromotionRegister');
const PromotionManagePage = ()=> import('views/promotion/childComps/PromotionManagePage')
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
    component: Promotion,
    children: [
      {
        path: 'register',
        name: 'PromotionRegister',
        component: PromotionRegister
      },
      {
        path:'manage',
        name:'PromotionManagePage',
        component:PromotionManagePage
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

//判断登录状态，携带
router.beforeEach((to, from, next) => {
  next()
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
    location.reload();
    // const targetPath = $router.history.pending.fullPath;
    // $router.replace(targetPath);
  }

});

export default router
