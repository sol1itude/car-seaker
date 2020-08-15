<template>
  <div
      style="background: #F8F8F8"
      @touchmove.prevent>
    首页
    <div>
      {{$route.query.code}}
    </div>
    <div>
      {{$route.query.state}}
    </div>
    <div>
      {{userInfo}}
    </div>
  </div>
</template>

<script>

import {
  getOpenId,
  getUserInfo
} from "@/network/common";

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
    getUrlParams() {
      let url = location.href;
      let paramsStr = url.substr(url.indexOf('?') + 1);
      let params = paramsStr.split('&');
      let paramMap = {
        code: '',
        state: ''
      };
      params.forEach(val => {
        let kv = val.split('=');
        alert(kv[0])
        if (kv[0] === 'code') {
          paramMap.code = kv[1]
        } else if (kv[0] === 'state') {
          paramMap.state = kv[1];
        }
      })
      alert(paramMap.code)

      getOpenId(paramMap.code)
      .then(res=>{
        alert(res)
      })
      .catch(err=>{
        alert(err)
      })
    }
  },
  mounted() {
    this.getUrlParams()
  }
}
</script>

<style
    scoped>

</style>