<template>
  <div id="login-page" @touchmove.prevent>
  
  </div>
</template>

<script>
import constParams from "@/common/constParams";

export default {
  name: "Login",
  created() {
    if (this.$store.state.wxCode==='1'){
      window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+constParams.appId+'&redirect_uri='+constParams.redirectUrl+'&response_type=code&scope=snsapi_base&state=ok#wechat_redirect'
    }else {
      this.$router.replace("/home")
    }
  }
}
</script>

<style scoped>
#login-page{
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  z-index: 99;
}
</style>