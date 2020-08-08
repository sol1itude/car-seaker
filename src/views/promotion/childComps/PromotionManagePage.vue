<template>
  <div class="promotion-manage" @touchmove.prevent>
    <div        class="promotion-manage-top">
      <div>
        <img            src="~assets/img/promotion/manage/balance.png"            alt="">
      </div>
      <div>
        余额:
        <span>{{balance.toFixed(2)}}</span>
      </div>
      <div          @click="toCashOutPage">
        去提现
        <img src="~assets/img/common/arrow_right_white.png" alt="">
      </div>
    </div>
    <div class="promotion-manage-middle">
      <div class="promotion-manage-middle-promotion">
        <div @click="toastIndex=1" class="promotion-manage-type">
          <div>
            <img style="width: 45px" src="~assets/img/promotion/manage/promotion_qrcode.png" alt="hello">
          </div>
          <div class="promotion-manage-top-text">
            推广二维码
          </div>
        </div>
        <div class="promotion-manage-type">
          <div>
            <img style="width: 45px" src="~assets/img/promotion/manage/promotion_poster.png" alt="hello">
          </div>
          <div class="promotion-manage-top-text">
            推广海报
          </div>
        </div>
        <div @click="toastIndex=3"
            class="promotion-manage-type">
          <div>
            <img style="width: 45px" src="~assets/img/promotion/manage/promotion_link.png" alt="hello">
          </div>
          <div class="promotion-manage-top-text">
            推广链接
          </div>
        </div>
      </div>
      <div class="promotion-manage-select"   @click="showMessage('收益记录还没写')">
        <div class="image">
          <img src="~assets/img/promotion/manage/profit_record.png" alt="">
        </div>
        <div class="text">
          收益记录
        </div>
        <div class="arrow">
          <img src="~assets/img/common/arrow_right_gray.png" alt="1">
        </div>
      </div>
      <div class="promotion-manage-select"   @click="showMessage('提现记录还没写')">
        <div class="image">
          <img src="~assets/img/promotion/manage/cash_out_record.png" alt="">
        </div>
        <div class="text">
          提现记录
        </div>
        <div class="arrow">
          <img src="~assets/img/common/arrow_right_gray.png" alt="1">
        </div>
      </div>
      <div class="promotion-manage-select"  @click="showMessage('推广规则还没写')">
        <div class="image">
          <img src="~assets/img/promotion/manage/promotion_rules.png" alt="">
        </div>
        <div class="text">
          推广规则
        </div>
        <div class="arrow">
          <img src="~assets/img/common/arrow_right_gray.png" alt="1">

        </div>
      </div>

    </div>
    <Toast v-if="toastIndex===1" @toastClicked="toastClicked">
      <div  @click.stop >
        <img style="width: calc(100% - 30px)"
            :src="qrCodePath"
            alt=""></div>
      <div  @click.stop style="color: #666;margin-top: 20px">
        长按二维码，可保存到手机
      </div>
    </Toast>
    <Toast v-if="toastIndex===3" @toastClicked="toastClicked" >
      <div @click.stop style="width:80%;margin-left:30px;text-align:left;word-break:break-all;line-height: 200%;color: #333;">{{promotionUrl}}</div>
      <div @click.stop="copyPromotionLink" style="margin-top: 30px;margin-left: calc(50% - 80px);background: #716dff;width: 160px;height: 40px;line-height: 40px;color: white;font-size: 14px;border-radius: 4px;">复制链接</div>
    </Toast>
  </div>
</template>

<script>
import Toast
  from "@/components/common/toast/Toast";
export default {
  name: "PromotionManagePage",
  components: {Toast},
  data() {
    return {
      balance: 480.00,
      toastIndex:999,
      qrCodePath:require('assets/img/test/qrcode.png'),
      promotionUrl:'http://www.baidu.com/asdhjfa;sdjflasdfjas;df/asdfasdkjflasdf;'
    }
  },
  methods: {
    showMessage(val){
      alert(val)
    },
    toCashOutPage() {
      this.$router.replace('/promotion/cashout')
    },
    toastClicked(){
      this.toastIndex=999
    },
    copyPromotionLink(){
      this.$copyText(this.promotionUrl)
      .then(res=>{
        //提示复制成功
        console.log('复制成功')
        alert('复制成功')

      })
    }
  }
}
</script>

<style
    scoped>
.promotion-manage-top-text{
  color: black;
}
.promotion-manage-select{
  display: flex;
}
.promotion-manage-select>div{
  display: inline-block;
  vertical-align: middle;
  margin: 8px;
  line-height: 40px;
  color: black;
}
.promotion-manage-select>.image>img{
  height: 30px;
  margin-top: 5px;
  margin-left: 15px;
}

.promotion-manage-select>div:nth-child(3){
  position: absolute;
  right: 20px;
}
.promotion-manage-select>div:nth-child(3)>img{
  width: 12px;
  vertical-align: -4px;
}

.promotion-manage {
  background: #f8f8f8 url("~assets/img/promotion/manage/promotion_manage_background.png") no-repeat fixed top;
  background-size: 100%;
  width: 100%;
  height: 100%;
  text-align: center;
}

.promotion-manage-top {
  position: fixed;
  top: 30px;
  left: 20px;
  right: 20px;
  height: 50px;
  text-align: left;
  vertical-align: top;
}

.promotion-manage-top div {
  display: inline-block;
  vertical-align: middle;
  line-height: 50px;
  height: 100%;
  color: black;
}

.promotion-manage-top div > img {
  height: 100%;
}

.promotion-manage-top > div:nth-child(1) {
  text-align: left;
}

.promotion-manage-top > div:nth-child(2) {
  text-align: left;
  margin-left: 12px;
  font-size: 17px;
  font-weight: bold;
  line-height: 50px;
  vertical-align: -5px;
  color: white;
}

.promotion-manage-top > div:nth-child(2) > span {
  font-size: 28px;
  display: inline-block;
  height: 100%;
  vertical-align: -2px;
  line-height: 50px;
}

.promotion-manage-top > div:nth-child(3) {
  text-align: left;
  font-size: 17px;
  position: absolute;
  right: 0px;
  color: white;
  vertical-align: 50px;
  margin-top: 3px;
}

.promotion-manage-top > div:nth-child(3) > img {
  height: 40%;
  vertical-align: text-top;
}

.promotion-manage-middle {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  text-align: center;
}

.promotion-manage-middle > div {
  position: absolute;
  left: 20px;
  right: 20px;
  height: 56px;
  background: white;
  border-radius: 4px;
  
}

.promotion-manage-middle > div:nth-child(1) {
  top: 5px;
  height: 112px;
  
}

.promotion-manage-middle > div:nth-child(2) {
  top: 132px;
}

.promotion-manage-middle > div:nth-child(3) {
  top: 208px;
}

.promotion-manage-middle > div:nth-child(4) {
  top: 284px;
}

.promotion-manage-middle-promotion {
  display: flex;
  justify-content: space-around;
}

.promotion-manage-middle-promotion > div {
  flex: 1;
  text-align: center;
  height: 100%;
}

.promotion-manage-type {
  margin-top: 20px;
  
}

.promotion-manage-type > div:nth-child(2) {
  margin-top: 12px;
}

</style>