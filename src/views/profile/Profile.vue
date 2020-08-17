<template>
  <div id="profile" @touchmove.prevent>
    <img :src="$store.state.userInfo.headimgurl" style="width: 50px;height: 50px;margin: auto;border-radius: 50%"
         alt="">
    <div>是否关注：{{ $store.state.hasSubscribe ? '是' : '否' }}</div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  
}
</script>

<style scoped>
#profile{
  background: #F8F8F8;
  width: 100vw;
  height: 100vh;
}
</style>