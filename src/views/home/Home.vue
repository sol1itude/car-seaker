<template>
  <div style="background: #F8F8F8">
    首页
    <p>{{ $route.query.id }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    let appId="wxc77be68b0f679a69";
    let state = 'mytest';
    let redirectUrl='http://wx.rainbase.cn/wx/setcode';
    redirectUrl=encodeURI(redirectUrl);
    let h = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc77be68b0f679a69&redirect_uri='+redirectUrl+'&response_type=code&scope=snsapi_userinfo&state='+state+'#wechat_redirect';
    alert(h)
    console.log(h)
    window.location.href=h;
  }
}
</script>

<style scoped>

</style>