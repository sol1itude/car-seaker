<template>
  <div style="background: #F8F8F8">
    首页
    <div>{{$route.query.code}}</div>
    <div>{{$route.query.state}}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {

  },
  methods:{
  }
}
</script>

<style
    scoped>

</style>