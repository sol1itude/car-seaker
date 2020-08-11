<template>
  <div class="promotion-post-page-container" @touchmove.prevent>
    <img :src="backgroundPic" alt="">
    <div class="qrcode-container">
      <div class="post-user-icon-container">
        <img
            src="~assets/img/promotion/post/header.jpg"
            alt="头像">
      </div>
      <div class="post-message-container">
        你好，我是{{wxName}},向你推荐[365查车]
      </div>
      <div class="post-qrcode-container">
        <div>
          <img
          src="~assets/img/promotion/post/qrcode.png"
          alt="头像">
        </div>
      </div>
      <div class="post-limit-container">
        长按识别关注，有效期至：2020-10-20
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
      wxName:'测试号',
      showGuide:false
    }
  },
  methods:{
    changePostImg(){
      ++ this.currentPicIndex ==3?this.currentPicIndex=0:null
    },
    getPromotionPost(){
      alert('获取成功，稍后请留意公众号消息')
    }
  },
  computed: {
    backgroundPic() {
      return this.backgroundList[this.currentPicIndex]
    }
  }
}
</script>

<style scoped>
.promotion-post-page-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 10;
  background: #f8f8f8;
}

.promotion-post-page-container > img {
  width: 100%;
  position: absolute;
  z-index: -1;
}

.qrcode-container{
  position: absolute;
  height: 295.5px;
  background: #fff;
  left: 20px;
  right: 20px;
  bottom: 100px;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
}

.post-user-icon-container{
  width: 65px;
  height: 65px;
  position: absolute;
  left: calc(50% - 33.5px);
  top: -33px;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
}
.post-user-icon-container>img{
  width: 100%;
  /*border-radius: 50%;*/
}

.post-message-container{
  position: absolute;
  width: 100%;
  top: 35px;
  font-size: 14px;
  color: #333;
  line-height: 14px;
  height: 14px;
}

.post-qrcode-container{
  height: 160px;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 81.5px;
}
.post-qrcode-container>div{
  height: 100%;
  width: 160px;
  position: absolute;
  left: calc(50% - 80px);
  background: #f8f8f8;
}
.post-qrcode-container>div>img{
  position: absolute;
  height: 140px;
  width: 140px;
  top: 10px;
  left: 10px;
  background: red;
}

.post-limit-container{
  position: absolute;
  background: #ffffff;
  width: 100%;
  height: 14px;
  font-weight: bold;
  color: #333;
  line-height: 14px;
  top: 261.5px;
}

.post-button-container{
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.post-button-container>div{
  display: inline-block;
  position: absolute;
}
.post-button-container>div:nth-child(1){
  width: 90px;
  left: 20px;
  height: 40px;
  line-height: 40px;
  /*background: cornflowerblue;*/
  color: #333;
  font-size: 14px;
}
.post-button-container>div:nth-child(1)>img{
  width: 20px;
  position: relative;
  top: 4px;
}
.post-button-container>div:nth-child(1)>div{
  width: calc(100% - 20px);
  position: relative;
  height: 100%;
  line-height: 40px;
  display: inline-block;
  left: 8px;
  font-size: 14px;
}
.post-button-container>div:nth-child(2){
  width: 104px;
  right: 144px;
  background: #ffa114;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 4px;
}
.post-button-container>div:nth-child(3){
  width: 104px;
  right: 20px;
  background: #716dff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 4px;
}

.post-push-guide{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0,0,0,0.6);
}
.post-push-guide>div:nth-child(1){
  width: 100%;
  /*background: red;*/
  text-align: right;
}
.post-push-guide>div:nth-child(1)>img{
  width: 322px;
  position: relative;
  right: 20px;
  top: 20px;
}
.post-push-guide>div:nth-child(2){
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