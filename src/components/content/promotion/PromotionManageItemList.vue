<template>
  <div class="promotion-manage-select" >
    <div class="image">
      <img :src="image" :alt="text">
    </div>
    <div class="text">
      {{text}}
    </div>
    <div class="arrow">
      <img :src="arrow" :alt="text">
    
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionManageItemList",
  props:['image','text','arrow'],
  methods:{
    showMessage(){
      console.log('hello')
    }
  },
  computed:{
    getImage(){
      return require(this.image)
    }
  }
}
</script>

<style scoped>

.promotion-manage-select {
  position: relative;
  display: flex;
  border-radius: 4px;
  height: 56px;
  background: white;
  
}

.promotion-manage-select > div {
  display: inline-block;
  vertical-align: middle;
  margin: 8px;
  line-height: 40px;
  color: black;
}

.promotion-manage-select > .image > img {
  height: 30px;
  margin-top: 5px;
  margin-left: 15px;
}

.promotion-manage-select > div:nth-child(3) {
  position: absolute;
  right: 20px;
}

.promotion-manage-select > div:nth-child(3) > img {
  width: 12px;
  vertical-align: -4px;
}
</style>