<template>
  <div style="position: relative">
    <input @change="alert('hello')" ref="monthSelect" class="month-select-box" type="month" name="hello" id="">
    <div class="month-select-box">2020/08</div>
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
  position: absolute;
  width: 120px;
  height: 30px;
  border: none;
  background: white;
}
input.month-select-box{
  z-index: 9;
  color: transparent;
  background: transparent;

}
</style>