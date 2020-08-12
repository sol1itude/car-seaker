<template>
  <div class="profit-list-item-container">
    <div class="profit-list-item-container-first">
      <div>
        <img :src="item.pic" alt="item.type">
      </div>
      <div>{{item.name}}</div>
      <div>{{item.num}}</div>
    </div>
    <div  class="profit-list-item-container-second">
      {{getFormatTime(item.time)}}
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/constUtils";

export default {
  name: "ProfitListItem",
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    getFormatTime(val){
      return formatDate(new Date(val),'yyyy/MM/dd  hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.profit-list-item-container{
  position: relative;
  height: 64px;
  width: 100%;
  border-top: 1px solid #dddddd;
}

.profit-list-item-container-first{
  height: 20px;
  width: 100%;
  margin-top: 5px;
  position: absolute;
}
.profit-list-item-container-first>div{
  display: inline-block;
  height: 100%;
  color: #333333;
}
.profit-list-item-container-first>div:nth-child(2){
  margin-left: 12px;
  height: 100%;
  position: absolute;
  top: 3px;
  font-size: 14px;
}
.profit-list-item-container-first>div:nth-child(3){
  position: absolute;
  right: 5px;
  top: 3px;
  height: 100%;
  line-height: 20px;
  font-size: 14px;
}
.profit-list-item-container-first img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.profit-list-item-container-second{
  position: absolute;
  top: 37px;
  left: 32px;
  height: 12px;
  font-size: 12px;
  line-height: 12px;
  color: #999999;
}
</style>