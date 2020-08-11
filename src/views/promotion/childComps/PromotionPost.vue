<template>
  <div class="promotion-post-page-container">
    <img :src="backgroundPic" alt="">
    <button @click="++currentPicIndex === 3?currentPicIndex=0:null">换一换</button>
  </div>
</template>

<script>
export default {
  name: "PromotionPost",
  data() {
    return {
      backgroundList: [
        require('assets/img/promotion/post/post1.jpg'),
        require('assets/img/promotion/post/post2.jpg'),
        require('assets/img/promotion/post/post3.jpg')
      ],
      currentPicIndex: 0
    }
  },
  computed: {
    backgroundPic() {
      return this.backgroundList[this.currentPicIndex]
    }
  }
}
</script>

<style scoped>
.promotion-post-page-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 10;
  background: white;
}

.promotion-post-page-container > img {
  width: 100%;
  position: absolute;
  z-index: -1;
}
</style>