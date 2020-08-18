<template>
  
  <div class="profile-manage-middle-profile">
    <div @click="toOtherPage(1)" class="profile-manage-type">
      <div>
        <img src="~assets/img/profile/push/todo.png" alt="hello">
      </div>
      <div class="profile-manage-top-text">
        待完成
      </div>
    </div>
    <div @click="toOtherPage(2)" class="profile-manage-type">
      <div>
        <img src="~assets/img/profile/push/ready.png" alt="hello">
      </div>
      <div class="profile-manage-top-text">
        已完成
      </div>
    </div>
    <div @click="toOtherPage(3)"
         class="profile-manage-type">
      <div>
        <img src="~assets/img/profile/push/cashback.png" alt="hello">
      </div>
      <div class="profile-manage-top-text">
        已退款
      </div>
    </div>
    <div @click="toOtherPage(0)"
         class="profile-manage-type">
      <div>
        <img src="~assets/img/profile/push/all.png" alt="hello">
      </div>
      <div class="profile-manage-top-text">
        全部订单
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "@/components/common/toast/Toast";

export default {
  name: "ProfilePush",
  data() {
    return {
      toastIndex: 1
    }
  },
  methods: {
    emitToast(val) {
      this.$emit('emitToast', val)
    },
    toOtherPage(val) {
      this.$router.push({
        path:'/order',
        query:{
          fromProfile:val
        }
      })
    }
  },
  components: {Toast}
}
</script>

<style scoped>


.profile-manage-middle-profile {
  height: 110px;
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  /*padding-top: 18px;*/
}

.profile-manage-middle-profile > div {
  flex: 1;
}

.profile-manage-top-text {
  color: #666;
  font-size: 14px;
  margin-top: 10px;
  
}

.profile-manage-type > div > img {
  width: 44px;
}

.profile-manage-type {
  margin-top: 20px;
  height: 90px;
}

.profile-manage-type > div:nth-child(1) {
  height: 44px;
}
</style>