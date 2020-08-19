<template>
  <div>
    <div id="profile" @touchmove.prevent>
      <router-view/>
      <div class="profile-header-container">
        <div>
          <img :src="$store.state.userInfo.headimgurl" alt="头像">
        </div>
<!--TODO 获取微信昵称-->
        <div>微信昵称</div>
        <div @click="toOtherPage('/myprofile')">
          <img src="~assets/img/common/arrow_right_white.png" alt="查看">
        </div>
      </div>
      
      <div class="profile-order-container">
        <ProfilePush></ProfilePush>
      </div>
      <!--其他信息选择-->
      <div class="profile-display-container">
        <PromotionManageItemList @click.native="toOtherPage('/promotion')"
                                 :image="require('assets/img/profile/promotion.png')"
                                 :text="'推广赚钱'"
                                 :arrow="require('assets/img/common/arrow_right_gray.png')"/>
        <PromotionManageItemList @click.native="toOtherPage('/suggestpage')"
                                 :image="require('assets/img/profile/suggest.png')"
                                 :text="'意见反馈'"
                                 :arrow="require('assets/img/common/arrow_right_gray.png')"/>
        <PromotionManageItemList @click.native="toOtherPage('/contactus')"
                                 :image="require('assets/img/profile/contact.png')"
                                 :text="'联系我们'"
                                 :arrow="require('assets/img/common/arrow_right_gray.png')"/>
      </div>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk';
import {getJsSdkSign} from "@/network/common";
import PromotionManageItemList from "@/components/content/promotion/PromotionManageItemList";
import ProfilePush from "@/components/content/profile/ProfilePush";


export default {
  name: "Profile",
  components: {ProfilePush, PromotionManageItemList},
  data() {
    return {
      wxjs: {}
    }
  },
  methods: {
    showMessage(val) {
      alert(val)
    },
    toOtherPage(val) {
      this.$router.push(val)
    },
    
    initWx() {
      //let location = window.location.href.substr(0,window.location.href.indexOf('#')[0]);
      //getJsSdkSign(location)
      //.then(res=>{
      //  this.wxjs=res.data;
      //  this.setWxConfig()
      //});
    },
    setWxConfig() {
      
      wx.config({
        //debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: this.wxjs.appId, // 必填，公众号的唯一标识
        timestamp: this.wxjs.timestamp, // 必填，生成签名的时间戳
        nonceStr: this.wxjs.nonceStr, // 必填，生成签名的随机串
        signature: this.wxjs.signature,// 必填，签名
        jsApiList: ['updateAppMessageShareData'], // 必填，需要使用的JS接口列表
        //jsapi_ticket:res.data.jsapi_ticket
      });
      wx.ready(function () {
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
      wx.error(err => {
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
  background: #f8f8f8 url("~assets/img/promotion/cashout/cash_out_background.png") no-repeat fixed top;
  background-size: 100%;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 9999;
}

.profile-header-container {
  position: relative;
  width: calc(100% - 40px);
  left: 20px;
  top: 8vw;
  height: 44px;
}

.profile-header-container > div {
  display: inline-block;
  position: absolute;
  height: 100%;
}

.profile-header-container > div:nth-child(1) {
  left: 0;
  width: 44px;
  border-radius: 50%;
  overflow: hidden;
}
.profile-header-container > div:nth-child(1)>img{
  width: 44px;
}

.profile-header-container > div:nth-child(2) {
  left: 56px;
  line-height: 44px;
  font-size: 17px;
  font-weight: bolder;
  color: #ffffff;
}

.profile-header-container > div:nth-child(3) {
  right: 0;
  vertical-align: top;
  width: 50px;
  text-align: right;
  line-height: 44px;
}

.profile-header-container > div:nth-child(3)>img {
  width: 10px;
  vertical-align: text-top;
}

.profile-order-container{
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  background: white;
  border-radius: 4px;
  top: 104px;
}

.profile-display-container {
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  top: 232px;
  display: flex;
  height: 208px;
  justify-content: space-between;
  flex-direction: column;
}
</style>