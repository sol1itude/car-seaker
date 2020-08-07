<template>
  <div>
    推广
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Promotion",
  beforeRouteEnter(to, from, next) {
    //console.log(to)
    next()
  },
  created() {
    if (!this.$store.state.idAuthenticate){
      this.$router.push('/promotion/register')
    }
  }
}
</script>

<style scoped>

</style>