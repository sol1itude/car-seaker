<template>
  <div>
    提现记录
    <button @click="buttonClick">日期</button>
    <input ref="monthSelect" class="month-select-box" type="month" name="hello" id="">
  </div>
</template>

<script>
export default {
  name: "CashOutRecords",
  methods:{
    buttonClick(){
      this.$refs.monthSelect.style.visibility='visible';
      alert("获取成功，稍后留意公众号信息")
    }
  }
}
</script>

<style scoped>
.month-select-box {
  color: red;
}
</style>