<template>
  <div id="promotion">
    <router-view/>
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
    if (!this.$store.state.promotionRegistered){
      this.$router.push('/promotion/register')
    }else {
      this.$router.push('/promotion/manage')
    }

  }
}
</script>

<style scoped>
#promotion{
  width: 100%;
  height: 100%;
}
</style>