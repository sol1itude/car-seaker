<template>
  <div id="profile" @touchmove.prevent>
    <img :src="$store.state.userInfo.headimgurl" style="width: 50px;height: 50px;border-radius: 50%"
         alt="">
    <div>是否关注：{{ $store.state.hasSubscribe ? '是' : '否' }}</div>
  </div>
</template>

<script>


export default {
  name: "Profile",
  data(){
    return {
    }
  },
  methods:{
  
  }
  
}
</script>

<style scoped>
#profile {
  background: #F8F8F8;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>