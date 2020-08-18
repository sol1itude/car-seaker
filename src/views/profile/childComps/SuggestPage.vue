<template>
  <div>
    <div class="suggest-page" @touchmove.prevent>
      <div>- 问题类型</div>
      <div class="problem-container">
        <div @click="currentProblemIndex=index" :style="activeProblem(index)" v-for="(item,index) in problems">{{item}}</div>
      </div>
      <div>- 详细描述</div>
      <div>
        <textarea @blur="rollTop" v-model="problemDetail" placeholder="请输入..."></textarea>
      </div>
      <div>- 联系方式</div>
      <div>
        <input @blur="rollTop" v-model="mobile" placeholder="请输入..." type="text">
      </div>
      <div @click="saveSuggest" class="suggest-page-btn">立即提交</div>
    </div>
  </div>
</template>

<script>
export default {
name: "SuggestPage",
  data(){
    return{
      currentProblemIndex:-1,
      problems:['报告问题','支付问题','推广问题','其他'],
      problemDetail:'',
      mobile:''
    }
  },
  methods:{
    rollTop() {
      window.scrollTo(0, 0)
      this.judgeCash();
    },
    saveSuggest(){
      //TODO 发送网络请求
      console.log(this.currentProblemIndex,this.problemDetail,this.mobile)
      this.$router.push('/suggestsuccess')
    },
    activeProblem(val){
      return val===this.currentProblemIndex?{background:'#716dff',color:'#ffffff'}:{}
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.suggest-page{
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 999;
  background: #ffffff;
}
.suggest-page>div:nth-child(1){
  width: calc(100% - 40px);
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 20px;
  height: 14px;
  line-height: 14px;
}

.problem-container{
  height: 40px;
  margin-top: 20px;
  display: flex;
  width: calc(100% - 40px);
  margin-left: 20px;
}
.problem-container>div{
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
.suggest-page>div:nth-child(3){
  width: calc(100% - 40px);
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 30px;
  height: 14px;
  line-height: 14px;
}

.suggest-page>div:nth-child(4){
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-top: 20px;
  height: 120px;
}
.suggest-page>div:nth-child(4)>textarea{
  border: none;
  background: #f8f8f8;
  height: 100%;
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  padding: 6px 12px;
  outline: none;
  resize: none;
  border-radius: 4px;
}

.suggest-page>div:nth-child(4)>textarea::placeholder{
  font-size: 14px;
  color: #999999;
}


.suggest-page>div:nth-child(5){
  width: calc(100% - 40px);
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 30px;
  height: 14px;
  line-height: 14px;
}

.suggest-page>div:nth-child(6){
  width: calc(100% - 40px);
  height: 56px;
  margin-top: 20px;
  margin-left: 20px;
  background: #f8f8f8;
}
.suggest-page>div:nth-child(6)>input{
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
.suggest-page>div:nth-child(6)>input::placeholder{
  font-size: 12px;
  color: #999999;
}

.suggest-page-btn{
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
</style>