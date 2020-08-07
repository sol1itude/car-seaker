<template>
  <div>
    推广
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Promotion",
  created() {
    console.log(!this.$store.state.idAuthenticate);
    if (!this.$store.state.idAuthenticate) {
      this.$router.push('/promotion/register')
    }
  }
}
</script>

<style scoped>

</style>