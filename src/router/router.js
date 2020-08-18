import Vue
  from 'vue'
import VueRouter
  from 'vue-router'

import {judgeUserAgent} from 'common/constUtils'
import constUrls
  from "@/common/constUrls";

Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const Promotion = () => import('views/promotion/Promotion');
const Order = () => import('views/order/Order');
const Profile = () => import('views/profile/Profile');
const PromotionRegister = () => import('views/promotion/childComps/PromotionRegister');
const PromotionManagePage = () => import('views/promotion/childComps/PromotionManagePage');
const CashOutPage = () => import('views/promotion/childComps/CashOutPage');
const CashOutSuccessPage = () => import('views/promotion/childComps/CashOutSuccessPage');
const CashOutRecords = () => import('views/promotion/childComps/CashOutRecords');
const PromotionPost = () => import('views/promotion/childComps/PromotionPost');
const ProfitRecords = () => import('views/promotion/childComps/ProfitRecords');
const Login = () => import('views/login/Login');
const routes = [
  {
    path: '',
    redirect: '/login'
    //redirect: '/profile'
  },
  {
    path: '/',
    redirect: '/login'
    //redirect: '/profile'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: ''
    },
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      title: '订单'
    },
    component: Order
  },
  {
    path: '/promotion',
    name: 'Promotion',
    meta: {
      title: '推广'
    },
    component: Promotion,
    children: [
      {
        path: 'register',
        name: 'PromotionRegister',
        meta: {
          title: '推广注册'
        },
        component: PromotionRegister
      },
      {
        path: 'manage',
        name: 'PromotionManagePage',
        meta: {
          title: '推广管理'
        },
        component: PromotionManagePage
      },
      {
        path: 'cashout',
        name: 'CashOutPage',
        meta: {
          title: '余额提现'
        },
        component: CashOutPage
      },
      {
        path: 'cashoutsuccess',
        name: 'CashOutSuccessPage',
        meta: {
          title: '提现成功'
        },
        component: CashOutSuccessPage
      },
      {
        path: 'cashoutrecords',
        name: 'CashOutRecords',
        meta: {
          title: '提现记录'
        },
        component: CashOutRecords
      },
      {
        path: 'promotionpost',
        name: 'PromotionPost',
        meta: {
          title: '推广海报'
        },
        component: PromotionPost
      },
      {
        path: 'profitrecords',
        name: 'ProfitRecords',
        meta: {
          title: '收益记录'
        },
        component: ProfitRecords
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '我的'
    },
    component: Profile
  }
]

const router = new VueRouter({
   //mode: 'history',
  routes
})

//判断登录状态
router.beforeEach((to, from, next) => {
  //TODO 判断登录状态 开发阶段关闭
  //let login = router.app.$options.store.state.login;
  //console.log(to.path)
  ////1.判断登录状态
  //if (to.path === '/login') {
  //  next();
  //} else {
  //
  //  if (login) {
  //    //2.已登录，跳转
  //    console.log('已登录，跳转')
  //    next();
  //  } else {
  //    //3.未登录,跳转登录授权页面
  //    router.replace({
  //      path: '/login',
  //      query: {
  //        target: to.path.indexOf('/'+1)
  //      }
  //    })
  //  }
  //}
  console.log(to);

  document.title = to.meta.title;
  // TODO 判断是否微信浏览器(发布后放开)
  // let ua = judgeUserAgent();
  // if (!ua) {
  //   window.location = constUrls.NOT_MICRO_MESSAGE_URL;
  //   return;
  // } else {
  //   next()
  // }
  next()
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    location.reload();
  }

});

export default router
