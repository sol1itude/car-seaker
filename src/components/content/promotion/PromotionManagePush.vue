<template>
<!--  <div class="promotion-manage-middle">-->
    
    <div class="promotion-manage-middle-promotion">
      <div @click="emitToast(1)" class="promotion-manage-type">
        <div>
          <img src="~assets/img/promotion/manage/promotion_qrcode.png" alt="hello">
        </div>
        <div class="promotion-manage-top-text">
          推广二维码
        </div>
      </div>
      <div @click="emitToast(2)" class="promotion-manage-type">
        <div>
          <img src="~assets/img/promotion/manage/promotion_poster.png" alt="hello">
        </div>
        <div class="promotion-manage-top-text">
          推广海报
        </div>
      </div>
      <div @click="emitToast(3)"
           class="promotion-manage-type">
        <div>
          <img src="~assets/img/promotion/manage/promotion_link.png" alt="hello">
        </div>
        <div class="promotion-manage-top-text">
          推广链接
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
import Toast from "@/components/common/toast/Toast";
export default {
  name: "PromotionManagePush",
  data(){
    return{
      toastIndex:1
    }
  },
  methods:{
    emitToast(val){
      this.$emit('emitToast',val)
    }
  },
  components: {Toast}
}
</script>

<style scoped>


.promotion-manage-middle-promotion {
  height: 110px;
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  /*padding-top: 18px;*/
}

.promotion-manage-top-text{
  color: #666;
  font-size: 14px;
  margin-top: 10px;
  
}

.promotion-manage-type>div>img{
  width: 44px;
}
.promotion-manage-type{
  margin-top: 20px;
}
</style>