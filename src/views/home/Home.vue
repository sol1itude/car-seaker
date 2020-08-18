<template>
  <div
      style="background: #F8F8F8"
      @touchmove.prevent>
    首页
    <div>
      {{ $store.state.openId }}
    </div>
    
    <button  @click="$router.push('/profile')">跳转</button>
  </div>
</template>

<script>

import wx from 'weixin-js-sdk';

export default {
  name: "Home",
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
  
  },
  methods: {
  
  },
  mounted() {
  
  }
}
</script>

<style
    scoped>

</style>