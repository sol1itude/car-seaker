<template>
  <div id="promotion">
    <router-view />
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "Promotion",
  created() {
    console.log(!this.$store.state.idAuthenticate);
    // if (!this.$store.state.promotionRegistered){
    //   this.$router.replace('/promotion/register')
    // }else {
    //   this.$router.replace('/promotion/manage')
    // }
    if(!confirm('是否注册过？')){
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