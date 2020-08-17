<template>
  <div
      style="background: #F8F8F8"
      @touchmove.prevent>
    首页
    <div>
      {{ $store.state.openId }}
    </div>
  </div>
</template>

<script>

//import {
//  getOpenId,
//  getUserInfo
//} from "network/common";
import constParams from "@/common/constParams";

export default {
  name: "Home",
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
  
  },
  methods: {
    getUrlParams(){
      let url = location.href;
      let paramsStr = url.substr(url.indexOf('?') + 1);
      let params = paramsStr.split('&');
      let paramMap = {
        code: '',
        state: ''
      };
      params.forEach(val => {
        let kv = val.split('=');
        if (kv[0] === 'code') {
          paramMap.code = kv[1]
        } else if (kv[0] === 'state') {
          paramMap.state = kv[1];
        }
      })
      //alert('code'+': '+paramMap.code)
      return paramMap;
    },
    async testUrlParams() {
      
      alert('openid'+(this.$store.state.openId === '0'))
  
      if (this.$store.state.openId === '0') {
        let urlParams = this.getUrlParams();
       alert('code: '+urlParams.code)
        alert('code===\'\''+(urlParams.code===''))
        if (urlParams.code===''){
          alert(window.location.href)
          let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + constParams.appId + '&redirect_uri=' + encodeURIComponent(constParams.redirectUrl) + '&response_type=code&scope=snsapi_base&state=ok#wechat_redirect';
          // alert(url)
          console.log(url)
          window.location.href = url;
        }else {
          await this.getOpenId();
          alert(this.$store.state.openId)
        }
      } else {
        this.$router.replace("/home")
      }
      
      //getOpenId(paramMap.code)
      //    .then(res => {
      //      alert(res)
      //    })
      //    .catch(err => {
      //      alert(err)
      //    })
      
      //this.$axios.post('/api/search_vehicle_index.php?s=/Home/User/getopenid',{
      //  code:paramMap.code
      //}).then(res=>{
      //  console.log(res)
      //  alert(res)
      //}).catch(err=>{
      //  console.log(err)
      //  alert(err)
      //})
      
      
  
      
      
    },
    getOpenId(code){
      fetch('http://yingyanchaxun.com/api/search_vehicle_index.php?s=/Home/User/getopenid', {
        method: 'POST',
        body: JSON.stringify({name: code}),
        mode: 'cors',
      }).then(res => res.json())
          .then(json=>{
            console.log(json)
            this.$store.commit('setOpenId',json.data.openid)
          }).catch(err => {
        console.log(err);
        alert(err)
      })
    }
  },
  mounted() {
    this.testUrlParams()
  }
}
</script>

<style
    scoped>

</style>