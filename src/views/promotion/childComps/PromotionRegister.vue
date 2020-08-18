<template>
  <div
      id="promotion-register"
      @touchmove.prevent>
    <div
        class="title"></div>
    
    <div
        @click="makeCall"
        class="promotion-register-call">
      <a style="color: white" href="tel:13764567708">拨打咨询电话</a>
    </div>
    <div
        class="promotion-register-input-container">
      <div :style="{border:mobileInputting?'1px solid #716dff':'none'}"
          class="promotion-register-input-box">
        <img
            src="~assets/img/promotion/register/mobile.png"
            alt="手机"
            style="vertical-align: -4px">
        <input
            v-model="mobile"
            @focus="mobileInputting=true"
            @blur="regxMobile"
            ref="mobileInput"
            type="text"
            @input.prevent
            placeholder="请输入手机号">
      </div>
      
      <div :style="{border:vcodeInputting?'1px solid #716dff':'none'}"
          class="promotion-register-input-box">
        <img
            src="~assets/img/promotion/register/vcode.png"
            alt="手机"
            style="vertical-align: -4px">
        <input
            v-model="vcode"
            @focus="vcodeInputting=true"
            @blur="vcodeInputting=false"
            ref="vcodeInput"
            type="text"
            placeholder="请输入验证码">
        <div
            @click="getVcodeMethod"
            style="color: #716dff;display: inline-block;margin-left: 15px">
          {{getVcode}}
        </div>
      </div>
      <div
          @click="promotionRegisterMethod"
          class="promotion-register-input-box">
        立即注册
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCode,
  promotionRegister
} from "@/network/Promotion";

export default {
  name: "ProfileRegister",
  data() {
    return {
      mobileInputting: false,
      vcodeInputting: false,
      timer: 0,
      mobile: '',
      vcode: '',
      getVcode: '获取',
      vcodeCounting: false
    }
  },
  methods: {

    makeCall() {
      console.log('打电话')
    },
    regxVcode() {
      return this.vcode.trim() !== '';
    },
    regxMobile() {
      this.mobileInputting = false;
      let mobileRegx = /^1[3456789]\d{9}$/;
      // if (!mobileRegx.test(this.mobile)) {
      //   alert('手机号码有误,请重新输入')
      // }
      return mobileRegx.test(this.mobile);
    },
    getVcodeMethod() {
      if (!this.regxMobile()){
        alert('手机号码有误');
        return ;
      }
      if (!this.vcodeCounting) {
        this.vcodeCounting = true;
        let counter = 10;
        let countTimer = setInterval(() => {
          this.getVcode = counter + 's'
          counter--;
          if (counter == 0) {
            clearInterval(countTimer)
            this.getVcode = '获取';
            this.vcodeCounting = false;
          }
        }, 1000)
        
        //发送网络请求获取验证码
        //1.验证手机号，防止为非法手机号
        if (this.regxMobile()) {
          // this.$emit('getPromotionVcode', this.mobile)
          //2.发送网络请求获取验证码
          getCode(this.mobile)
              .then(res => {
                console.log(res)
                this.vcode = res.data.content
              })
        }
      }
    },
    promotionRegisterMethod() {
      if (!this.regxMobile()) {
        alert('手机号码有误');
        return;
      }
      if (!this.regxVcode()) {
        alert('验证码不能为空');
        return;
      }
      promotionRegister(this.mobile, this.vcode)
          .then(res => {
            //判断注册结果
            if (true) {
              console.log(res)
              alert('送你一首古诗吧：\n' + res.data.content)
            } else {
            
            }
          })
    }
    
  },
  
  mounted() {
  
  },
  computed: {
    isInputting() {
      return this.mobileInputting || this.vcodeInputting
    }
  },
  watch: {
    isInputting(val) {
      console.log(val)
      if (!val) {
        this.timer = setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      } else {
        clearTimeout(this.timer)
      }
    }
  }
}
</script>

<style
    scoped>

#promotion-register {
  background-image: url("~assets/img/promotion/register/promotion_register_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  
  background-attachment: fixed;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  text-align: center;
}


.promotion-register-call {
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
  color: white;
  background: #FFB647;
  font-weight: bold;
  position: fixed;
  left: 25%;
  right: 25%;
  top: 30%;
}

.promotion-register-input-container {
  position: absolute;
  left: 25px;
  right: 25px;
  height: 73.07vw;
  bottom: 26.67vw;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(29, 53, 106, 0.48);
  /*justify-content: space-evenly;*/
  
  
}

.promotion-register-input-box {
  background: red;
  text-align: left;
  /*border: 1px solid black;*/
  /*flex: 1;*/
}

.promotion-register-input-box img {
  margin-left: 20px;
  width: 20px;
}

.promotion-register-input-box input {
  width: calc(100% - 120px);
  height: 100%;
  margin-left: 12px;
  border: none;
  background: #f8f8f8;
}


.promotion-register-input-box input::placeholder {
  color: #acaaaf;
}

.promotion-register-input-box:nth-child(1) {
  width: calc(90% - 20px);
  height: 15vw;
  margin-top: 8vw;
  background: #f8f8f8;
  border-radius: 4px;
  
}

.promotion-register-input-box:nth-child(2) {
  width: calc(90% - 20px);
  height: 15vw;
  margin-top: 5.33vw;
  background: #f8f8f8;
  border-radius: 4px;
  
}

.promotion-register-input-box:nth-child(3) {
  width:64vw;
  height: 13.87vw;
  margin-top: 8vw;
  border-radius: 8px;
  background: #716dff;
  color: white;
  line-height: 13.87vw;
  text-align: center;
  font-size: 14px;
  
}

</style>