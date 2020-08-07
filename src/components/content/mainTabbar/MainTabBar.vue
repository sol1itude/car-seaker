<template>
    <tab-bar>
      <tab-bar-item v-for="tabBar in tabbars" :key="tabBar.path" :path="tabBar.path" :active-color="tabBar.activeColor">
        <template v-slot:item-icon>
          <img :src="tabBar.pic" alt="home">
        </template>
        <template v-slot:item-icon-active>
          <img :src="tabBar.picActive">
        </template>
        <template v-slot:item-text>
          <div>{{ tabBar.text }}</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar, TabBarItem
  },
  data() {
    return {
      tabbars: [
        {
          pic: require('assets/img/tabbar/home.png'),
          picActive: require('assets/img/tabbar/home_active.png'),
          text: '首页',
          path: '/home',
          activeColor: '#716dff'
        },
        {
          pic: require('assets/img/tabbar/order.png'),
          picActive: require('assets/img/tabbar/order_active.png'),
          text: '订单',
          path: '/order',
          activeColor: '#716dff'
        },
        {
          pic: require('assets/img/tabbar/promotion.png'),
          picActive: require('assets/img/tabbar/promotion_active.png'),
          text: '推广',
          path: '/promotion',
          activeColor: '#716dff'
        },
        {
          pic: require('assets/img/tabbar/profile.png'),
          picActive: require('assets/img/tabbar/profile_active.png'),
          text: '我的',
          path: '/profile',
          activeColor: '#716dff'
        },
      ]
    }
  }
}
</script>

<style scoped>
#main-tab-bar{
 height: 49px;
}
</style>
