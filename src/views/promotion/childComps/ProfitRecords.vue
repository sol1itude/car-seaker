<template>
  <div class="profit-records-page">
    <div class="profit-records-page-title">
      <div>800.00</div>
      <div>累计收益（元）</div>
    </div>
    <div class="profit-records-page-middle">
      <div @click="showMonthPicker">{{ selectedMonth }}</div>
      <div @click="showMonthPicker"><img src="~assets/img/common/triangle_down.png" alt="查询"></div>
      <div>共 {{ monthlyOutCash }} 元</div>
    </div>
    <div v-if="displayRecords.length>0" class="profit-records-container">
      
      <scroll :probe-type="3"
              :pull-up-load="true"
              ref="scroll"
              @reachBottom="loadMoreGoods"
              @scroll="scrollPositionChange">
        
        <ProfitListItem v-for="item in displayRecords" :item="getItem(item)"></ProfitListItem>
      </scroll>
    
    </div>
    <div v-else class="profit-records-container">
      <div class="no-profit-records">
        <img src="~assets/img/promotion/profit/no_profit_display.png" alt="提现记录为空">
        <div>本月暂无收益记录</div>
      </div>
    </div>
  
  </div>
</template>

<script>
import ProfitListItem from "@/components/content/cashout/ProfitListItem";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "ProfitRecords"
  , components: {ProfitListItem, Scroll},
  data() {
    return {
      selectedMonth: '2020/08',
      records: [
        {type: 'ckgj', account: '123124@qq.com', num: 23, time: 1593203037204},
        {type: 'wbjl', account: '123124@qq.com', num: 13, time: 1593205337204},
        {type: 'wbpz', account: '123124@qq.com', num: 53, time: 1593205117204},
        {type: 'cxsb', account: '123124@qq.com', num: 43, time: 1593115987204},
        {type: 'wbjl', account: '123124@qq.com', num: 23, time: 1593095987204},
        {type: 'wbpz', account: '123124@qq.com', num: 93, time: 1593015987204},
        {type: 'wbjl', account: '123124@qq.com', num: 5, time: 1591205987204},
        {type: 'cxsb', account: '123124@qq.com', num: 45, time: 1591995987204},
        {type: 'wbjl', account: '123124@qq.com', num: 18, time: 1597215987204},
        {type: 'ckgj', account: '', num: 23, time: 1597215987204},
        {type: 'wbjl', account: '', num: 35, time: 1597215987204},
        {type: 'cxsb', account: '', num: 32, time: 1597215987204},
        {type: 'wbpz', account: '', num: 19, time: 1597215987204},
        {type: 'wbpz', account: '', num: 29, time: 1597215987204},
        {type: 'wbpz', account: '', num: 47, time: 1597215987204},
        {type: 'wbpz', account: '', num: 45, time: 1597215987204},
        {type: 'wbpz', account: '', num: 78, time: 1597215987204},
      ],
      month: []
    }
  },
  methods: {
    getItem(val) {
      let name = '';
      let pic = '';
      switch (val.type) {
        case 'wbpz':
          name = '维保碰撞';
          pic = require('assets/img/promotion/profit/wbpz.png');
          break;
        case 'cxsb':
          name = '车型识别';
          pic = require('assets/img/promotion/profit/cxsb.png');
          break;
        case 'wbjl':
          name = '维保记录';
          pic = require('assets/img/promotion/profit/wbjl.png');
          break;
        case 'ckgj':
          name = '车况估价';
          pic = require('assets/img/promotion/profit/ckgj.png');
  
          break;
        default:
          name = '其他'
          pic = require('assets/img/promotion/profit/ckgj.png');
      }
      
      return {
        name: name,
        pic: pic,
        time: val.time,
        type: val.type,
        num: val.num,
        account: val.account || ''
      }
    },
    scrollPositionChange() {
      //监听滚动位置
      //console.log('a')
    },
    loadMoreGoods() {
      //加载更多？
      //console.log('aa')
    },
    padLeftZero(str) {
      return ('00' + str).substr(str.length)
    },
    showMonthPicker() {
      /*
      *  * weui.datePicker({
 *     start: 1990,
 *     end: 2000,
 *     defaultValue: [1991, 6, 9],
 *     onChange: function(result){
 *         console.log(result);
 *     },
 *     onConfirm: function(result){
 *         console.log(result);
 *     },
 *     id: 'datePicker'
 * });*/
      this.$weui.datePicker({
        start: 2018, // 起始时间
        end: new Date().getFullYear(), // 结束时间
        defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1], //默认当前值
        depth: 2, //选择器中只展示年月，默认展示年月日
        className: 'wx-picker-custom',
        //onChange: function(result) {
        //  console.log(result);//数组形式的年月日
        //},
        onConfirm: result => {
          this.month = result
          this.selectedMonth = result[0].value + '/' + (result[1].value < 10 ? ('0' + result[1].value) : result[1].value)
          console.log(this.month)
        }
      })
    },
    
  },
  mounted() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    this.selectedMonth = year + '/' + month;
  },
  computed: {
    displayRecords() {
      return this.records.filter(val => {
        let selected = this.selectedMonth.split('/');
        let valDate = new Date(val.time);
        return selected[0] == valDate.getFullYear() && selected[1] == (valDate.getMonth() + 1)
      })
    },
    monthlyOutCash() {
      console.log('records', this.displayRecords)
      let a = this.displayRecords.reduce((pre, current) => (pre + current.num), 0)
      
      return a;
    }
  }
}
</script>

<style scoped>
.profit-records-page {
  background: #f8f8f8 url("~assets/img/promotion/cashoutrecords/cash_out_records_background.png") no-repeat left top;
  background-size: 100%;
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 12;
}

.profit-records-page-title {
  position: relative;
  top: 8vw;
  width: 100%;
  height: 15.2vw;
  text-align: center;
}
.profit-records-page-title>div:nth-child(1){
  height: 7.467vw;
  line-height: 7.467vw;
  font-size: 7.467vw;
  color: #ffffff;
  font-weight: bold;
}
.profit-records-page-title>div:nth-child(2){
  height: 17px;
  line-height: 17px;
  font-size: 17px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 12px;
}

.profit-records-page-middle {
  position: relative;
  top: 16vw;
  height: 15vw;
  width: calc(100% - 40px);
  left: 20px;
  background: #ffffff;
  border-radius: 4px;
}

.profit-records-page-middle > div {
  display: inline-block;
  height: 100%;
}

.profit-records-page-middle > div:nth-child(1) {
  margin-left: 20px;
  line-height: 15vw;
  font-size: 14px;
  color: #333;
}

.profit-records-page-middle > div:nth-child(2) {
  margin-left: 4px;
}

.profit-records-page-middle > div:nth-child(2) > img {
  width: 6px;
  vertical-align: middle;
}

.profit-records-page-middle > div:nth-child(3) {
  position: absolute;
  right: 20px;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  line-height: 15vw;
}

.profit-records-container {
  width: calc(100% - 40px);
  height: calc(100vh - 52vw);
  position: relative;
  top: 23.2vw;
  left: 20px;
  /*border-top: 1px solid #dddddd;*/
  overflow-y: scroll;
  
}

.profit-records-container > .no-profit-records {
  position: absolute;
  top: 60px;
  width: 100%;
  text-align: center;
}

.profit-records-container > .no-profit-records img {
  width: 100px;
}

.profit-records-container > .no-profit-records div {
  height: 14px;
  color: #999999;
  line-height: 14px;
  margin-top: 15px;
}
</style>