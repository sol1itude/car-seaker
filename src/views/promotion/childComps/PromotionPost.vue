<template>
  <div class="promotion-post-page-container" @touchmove.capture>
    <div class="post-page-head-container">
      <img :src="backgroundPic" alt="">
      <div class="qrcode-container" :style="{height:calcSize(295.5)+'px'}">
        <div
            :style="{left:((windowWidth-40)/2 - calcSize(65)/2)+'px',width:calcSize(65)+'px',height: calcSize(65)+'px',top:calcSize(-33)+'px'}"
            class="post-user-icon-container">
          <img
              src="~assets/img/promotion/post/header.jpg"
              alt="头像">
        </div>
        <div :style="{top:calcSize(35)+'px'}" class="post-message-container">
          你好，我是{{ wxName }},向你推荐[365查车]
        </div>
        <div :style="{top:calcSize(81.5)+'px',height:calcSize( 160)+'px'}" class="post-qrcode-container">
          <div :style="{width:calcSize( 160)+'px',left:(windowWidth/2-20-calcSize(160)/2)+'px'}">
            <img
                :style="{width:calcSize(140)+'px',height:calcSize(140)+'px',left:calcSize(10)+'px',top:calcSize(10)+'px'}"
                src="~assets/img/promotion/post/qrcode.png"
                alt="头像">
          </div>
        </div>
        <div :style="{top:calcSize( 261.5)+'px'}" class="post-limit-container">
          长按识别关注，有效期至：2020-10-20
        </div>
      </div>
    </div>
    
    <div class="post-button-container">
      <div @click="changePostImg">
        <img
            src="~assets/img/promotion/post/change_post.png"
            alt="换一张">
        <div>换一张</div>
      </div>
      <div @click="getPromotionPost">获取海报</div>
      <div @click="showGuide=true">分享海报</div>
    </div>
    <div @click.stop v-show="showGuide" class="post-push-guide">
      <div>
        <img
            src="~assets/img/promotion/post/push_guide.png"
            alt="引导">
      </div>
      <div @click="showGuide=false">我知道了</div>
    </div>
  
  </div>
</template>

<script>
import {wx} from 'weixin-js-sdk'

export default {
  name: "PromotionPost",
  data() {
    return {
      backgroundList: [
        require('assets/img/promotion/post/post1.jpg'),
        require('assets/img/promotion/post/post2.jpg'),
        require('assets/img/promotion/post/post3.jpg')
      ],
      currentPicIndex: 0,
      wxName: '测试号',
      showGuide: false,
      baseWidth: 375,
      windowWidth: 375,
      wx: {}
    }
  },
  methods: {
    changePostImg() {
      ++this.currentPicIndex === 3 ? this.currentPicIndex = 0 : null
    },
    getPromotionPost() {
      
      
      /*
      *  * @example
 * weui.dialog({
 *     title: 'dialog标题',
 *     content: 'dialog内容',
 *     className: 'custom-classname',
 *     buttons: [{
 *         label: '取消',
 *         type: 'default',
 *         onClick: function () { alert('取消') }
 *     }, {
 *         label: '确定',
 *         type: 'primary',
 *         onClick: function () { alert('确定') }
 *     }]
 * });
      * */
      //定义微信提示
     let toast =  this.$weui.dialog({
        title: '获取提示',
        content: '获取成功，稍后请留意公众号消息',
        className: 'wx-toast-custom',
        buttons: [
          {
            label: '我知道了',
            type: 'primary',
            onClick:  ()=>{
              toast.hide(()=>{
                this.$router.replace('/promotion/manage')
              })
            }
          }
        ]
      })
     
    },
    calcSize(val) {
      return val * this.windowWidth / this.baseWidth;
    },
    initWx() {
      
      //wx.config({
      //  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //  appId: 'wx0fa060509027bf1d', // 必填，公众号的唯一标识
      //  timestamp: , // 必填，生成签名的时间戳
      //  nonceStr: '', // 必填，生成签名的随机串
      //  signature: '',// 必填，签名
      //  jsApiList: [] // 必填，需要使用的JS接口列表
      //});
      //this.wx=wx;
    }
    
  },
  computed: {
    backgroundPic() {
      return this.backgroundList[this.currentPicIndex]
    },
  },
  mounted() {
    console.log(window.innerWidth)
    this.windowWidth = window.innerWidth;
    this.initWx()
  }
}
</script>

<style scoped>

.promotion-post-page-container {
  width: 100vw;
  height: auto;
  position: relative;
  background: #f8f8f8;
  z-index: 200;
}

.post-page-head-container {
  width: 100vw;
  position: relative;
  z-index: 20;
  
}

.post-page-head-container > img {
  width: 100%;
}

.promotion-post-page-container > div {
  display: block;
  /*width: 100%;*/
  /*height: auto;*/
  /*position: absolute;*/
  /*z-index: -1;*/
}

.qrcode-container {
  position: absolute;
  display: block;
  width: calc(100% - 40px);
  background: #fff;
  left: 20px;
  right: 20px;
  /*top: -295.5px;*/
  bottom: 0px;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  z-index: 20;
}

.post-user-icon-container {
  
  position: relative;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
}

.post-user-icon-container > img {
  width: 100%;
  /*border-radius: 50%;*/
}

.post-message-container {
  position: absolute;
  width: 100%;
  font-size: 14px;
  color: #333;
  line-height: 14px;
  height: 14px;
}

.post-qrcode-container {
  width: 100%;
  background: #fff;
  position: absolute;
}

.post-qrcode-container > div {
  height: 100%;
  width: 100%;
  position: absolute;
  background: #f8f8f8;
}

.post-qrcode-container > div > img {
  position: absolute;
  background: red;
}

.post-limit-container {
  position: absolute;
  background: #ffffff;
  width: 100%;
  height: 14px;
  font-weight: bold;
  color: #333;
  line-height: 14px;
  
}

.post-button-container {
  height: 100px;
  width: 100%;
  padding-top: 30px;
  position: relative;
  /*position: absolute;*/
  background: #f8f8f8;
  z-index: 20;
  
}

.post-button-container > div {
  display: inline-block;
  position: absolute;
  z-index: 20;
}

.post-button-container > div:nth-child(1) {
  width: 24%;
  left: 20px;
  height: 40px;
  line-height: 40px;
  /*background: cornflowerblue;*/
  color: #333;
  font-size: 14px;
  
}

.post-button-container > div:nth-child(1) > img {
  width: 20px;
  position: relative;
  top: 4px;
  
}

.post-button-container > div:nth-child(1) > div {
  width: calc(100% - 20px);
  position: relative;
  height: 100%;
  line-height: 40px;
  display: inline-block;
  left: 8px;
  font-size: 14px;
  
}

.post-button-container > div:nth-child(2) {
  width: 27.37%;
  right: 38.4%;
  background: #ffa114;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 4px;
  
}

.post-button-container > div:nth-child(3) {
  width: 27.37%;
  right: 20px;
  background: #716dff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 4px;
  
}

.post-push-guide {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
}

.post-push-guide > div:nth-child(1) {
  width: 100%;
  /*background: red;*/
  text-align: right;
  
}

.post-push-guide > div:nth-child(1) > img {
  width: calc(100% - 40px);
  position: relative;
  right: 20px;
  top: 20px;
  
}

.post-push-guide > div:nth-child(2) {
  position: absolute;
  bottom: 120px;
  height: 52px;
  line-height: 48px;
  color: #ffffff;
  font-size: 14px;
  border: 2px solid #ffffff;
  width: 240px;
  border-radius: 8px;
  left: calc(50% - 120px);
  text-align: center;
}

</style>