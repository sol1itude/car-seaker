<template>
  <div id="promotion" >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Promotion",
  created() {
  

  },
  mounted() {
    //if(false){
    if(!confirm('是否注册过推广？')){
      this.$router.replace('/promotion/register')
    }else {
      this.$router.replace('/promotion/manage')
    }
  },
  methods:{
    hello(val){
      console.log(val)
    }
  },

}
</script>

<style scoped>
#promotion{
  width: 100%;
  height: 100%;
}
</style>