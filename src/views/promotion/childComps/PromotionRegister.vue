<template>
  <div
      id="promotion-register">
    <div
        class="title"></div>
    <a href="tel:13764567708">移动WEB页面JS一键拨打号码咨询功能</a>
    <div @click="makeCall" class="promotion-register-call">
      dadianhua
    </div>
    <div class="promotion-register-input-container">
     <p> <input style="height: 112px;position: fixed;left: 40px;right: 40px"
                type="text"></p>
      <input style="height: 112px"
          type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileRegister",
  methods:{
    makeCall(){
      console.log('打电话')
    }
  }
}
</script>

<style
    scoped>

#promotion-register {
  background-image: url("~assets/img/promotion/promotion_register_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  
  background-attachment: fixed;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  text-align: center;
}
.promotion-register-call{
  height: 40%;
}

.promotion-register-input-container{
  position: fixed;
  left: 40px;
  right: 40px;
  height: 548px;
  bottom: 150px;
  background: rebeccapurple;
}
</style>