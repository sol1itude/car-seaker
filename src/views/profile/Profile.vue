<template>
  <div id="profile" @touchmove.prevent>
    <img :src="$store.state.userInfo.headimgurl" style="width: 50px;height: 50px;border-radius: 50%"
         alt="">
    <div>是否关注：{{ $store.state.hasSubscribe ? '是' : '否' }}</div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk';
import {getJsSdkSign} from "@/network/common";

export default {
  name: "Profile",
  data(){
    return {
      wxjs:{}
    }
  },
  methods:{
    
    initWx(){
      let location = window.location.href.substr(0,window.location.href.indexOf('#')[0]);
      getJsSdkSign(location)
      .then(res=>{
        this.wxjs=res.data;
        this.setWxConfig()
      });
    },
    setWxConfig(){
      
      wx.config({
        //debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: this.wxjs.appId, // 必填，公众号的唯一标识
        timestamp: this.wxjs.timestamp, // 必填，生成签名的时间戳
        nonceStr: this.wxjs.nonceStr, // 必填，生成签名的随机串
        signature:this.wxjs.signature,// 必填，签名
        jsApiList: ['updateAppMessageShareData'], // 必填，需要使用的JS接口列表
        //jsapi_ticket:res.data.jsapi_ticket
      });
      wx.ready(function (){
        wx.updateAppMessageShareData({
          title: '测试页面啊', // 分享标题
          desc: '这里可以写描述啊知道吗', // 分享描述
          link: 'http://yingyanchaxun.com/car_seeker/index.html?state=profile', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'http://yingyanchaxun.com/car_seeker/1.jpg', // 分享图标
          success: function () {
            alert('自定义分享给朋友设置成功')
          }
        })
      });
      wx.error(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.initWx()
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