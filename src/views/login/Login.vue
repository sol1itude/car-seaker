<template>
  <div id="login-page" @touchmove.prevent>
    {{$route.params.code}}
    {{$route.params.state}}
  </div>
</template>

<script>
import constParams from "@/common/constParams";

export default {
  name: "Login",
  created() {
    if (this.$store.state.wxCode==='0'){
      let url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+constParams.appId+'&redirect_uri='+encodeURIComponent(constParams.redirectUrl)+'&response_type=code&scope=snsapi_base&state=ok#wechat_redirect';
      // alert(url)
      console.log(url)
      window.location.href=url;
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