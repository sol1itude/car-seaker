<template>
  <div>
    <div class="suggest-page" @touchmove.prevent>
      <div>- 问题类型</div>
      <div class="problem-container">
        <div @click="currentProblemIndex=index" :style="activeProblem(index)" v-for="(item,index) in problems">
          {{ item }}
        </div>
      </div>
      <div>- 详细描述</div>
      <div>
        <textarea @touchmove.stop @focus="inputting=true" @blur="judgeSuggest(1)" v-model="problemDetail"
                  placeholder="请输入..."></textarea>
      </div>
      <div>- 联系方式</div>
      <div>
        <input @focus="inputting = true" @blur="judgeSuggest(2)" v-model="mobile" placeholder="请输入..." type="text">
      </div>
      <div @click="saveSuggest" class="suggest-page-btn">立即提交</div>
    </div>
    <div v-if="showSingleMessage" class="single-message-container">
      <SingleLineMessageToast>{{ singleMessage }}</SingleLineMessageToast>
    </div>
  </div>
</template>

<script>
import SingleLineMessageToast from "@/components/common/messageToast/SingleLineMessageToast";

export default {
  name: "SuggestPage",
  components: {SingleLineMessageToast},
  data() {
    return {
      currentProblemIndex: -1,
      problems: ['报告问题', '支付问题', '推广问题', '其他'],
      problemDetail: '',
      mobile: '',
      singleMessage: '',
      showSingleMessage: false,
      timer: -1,
      inputting: false,
      rollTimer:-1
    }
  },
  methods: {
    rollTop() {
      this.rollTimer=setTimeout(()=>{
        window.scrollTo(0, 0)
      },300)
    },
    saveSuggest() {
      //TODO 发送网络请求
      console.log('hello')
      if (!(this.judgeSuggest(3) && this.judgeSuggest(1) && this.judgeSuggest(2))) {
        return;
      }
      this.judgeSuggest(2);
      
      console.log(this.currentProblemIndex, this.problemDetail, this.mobile)
      this.$router.push('/suggestsuccess')
    },
    regxMobile() {
      let mobileRegx = /^1[3456789]\d{9}$/;
      return mobileRegx.test(this.mobile);
    },
    activeProblem(val) {
      return val === this.currentProblemIndex ? {background: '#716dff', color: '#ffffff'} : {}
    },
    showSingleMessageMethod(val) {
      this.singleMessage = val;
      this.showSingleMessage = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showSingleMessage = false
      }, 1000)
    },
    judgeSuggest(val) {
      this.inputting=false;
      switch (val) {
        case 1:
          if (this.problemDetail.length === 0) {
            this.showSingleMessageMethod('请输入反馈内容');
            return false;
          } else {
            return true;
          }
        case 2:
          if (!this.regxMobile()) {
            this.showSingleMessageMethod('请输入正确的联系方式');
            return false;
          } else {
            return true;
          }
        case 3:
          if (this.currentProblemIndex === -1) {
            this.showSingleMessageMethod('请选择正确的意见类型');
            return false;
          } else {
            return true;
          }
      }
    }
  },
  computed: {},
  watch:{
    inputting(val){
      if (!val){
        this.rollTop();
      }else {
        clearTimeout(this.rollTimer)
      }
    }
  }
}
</script>

<style scoped>
.suggest-page {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 99;
  background: #ffffff;
}

.suggest-page > div:nth-child(1) {
  width: calc(100% - 40px);
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 20px;
  height: 14px;
  line-height: 14px;
}

.problem-container {
  height: 40px;
  margin-top: 20px;
  display: flex;
  width: calc(100% - 40px);
  margin-left: 20px;
}

.problem-container > div {
  display: inline-block;
  height: 100%;
  line-height: 40px;
  font-size: 14px;
  color: #333333;
  padding: 0px 12px;
  border-radius: 4px;
  background: #f8f8f8;
  margin-right: 8px;
  transition: all .2s ease-in;
}

.suggest-page > div:nth-child(3) {
  width: calc(100% - 40px);
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 30px;
  height: 14px;
  line-height: 14px;
}

.suggest-page > div:nth-child(4) {
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-top: 20px;
  height: 120px;
}

.suggest-page > div:nth-child(4) > textarea {
  border: none;
  background: #f8f8f8;
  height: 100%;
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  padding: 12px 12px;
  outline: none;
  resize: none;
  border-radius: 4px;
}

.suggest-page > div:nth-child(4) > textarea::placeholder {
  font-size: 14px;
  color: #999999;
}


.suggest-page > div:nth-child(5) {
  width: calc(100% - 40px);
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 30px;
  height: 14px;
  line-height: 14px;
}

.suggest-page > div:nth-child(6) {
  width: calc(100% - 40px);
  height: 56px;
  margin-top: 20px;
  margin-left: 20px;
  background: #f8f8f8;
}

.suggest-page > div:nth-child(6) > input {
  width: 100%;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  border: none;
  outline: none;
  margin-top: 20px;
  background: #f8f8f8;
  border-radius: 4px;
  padding-left: 12px;
}

.suggest-page > div:nth-child(6) > input::placeholder {
  font-size: 12px;
  color: #999999;
}

.suggest-page-btn {
  width: 240px;
  height: 52px;
  line-height: 52px;
  font-size: 14px;
  color: #ffffff;
  background: #716dff;
  margin-left: calc(50% - 120px);
  border-radius: 8px;
  text-align: center;
  margin-top: 30px;;
}

.single-message-container {
  position: fixed;
  width: 100%;
  text-align: center;
  top: 40vh;
  height: 54px;
  z-index: 999;
}
</style>