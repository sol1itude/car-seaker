<template>
  <div>
    <div
        class="contact-us" @touchmove.prevent>
      <div
          class="contact-us-container">
        <div>
          <div>
            <img
                src="~assets/img/profile/contactus/phone.png">
          </div>
          <div>
            座机
          </div>
          <div>
            <a href="tel:022-58956346">022-58956346</a>
          </div>
        </div>
        <div>
          <div>
            <img
                src="~assets/img/profile/contactus/custom_service.png">
          </div>
          <div>
            客服
          </div>
          <div>
            <a href="tel:18522776821">18522776821</a>
          </div>
          <div>
            （同微信号）
          </div>
        </div>
        <div>
          <div>
            <img
                src="~assets/img/profile/contactus/business.png">
          </div>
          <div>
            商务
          </div>
          <div>
            <a href="tel:18522776821">18522776821</a>
          </div>
          <div>
            （同微信号）
          </div>
        </div>
        <div>
          <div>
            <img
                src="~assets/img/profile/contactus/email.png">
          </div>
          <div>
            邮箱
          </div>
          <div>
            chaxun365@ceshi.com
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style
    scoped>
.contact-us {
  background: #f8f8f8 url("~assets/img/profile/contactus/contactus_background.png") no-repeat fixed top;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 999;
}

.contact-us-container {
  position: absolute;
  bottom: 25px;
  background: #ffffff;
  width: calc(100% - 8.667vw);
  left: 5.333vw;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-radius: 8px;
  padding: 4vw 0px;
}

.contact-us-container > div {
  width: calc(100% - 8.667vw);
  position: relative;
  left: 5.333vw;
}

.contact-us-container > div > div {
  display: inline-block;
  height: 20px;
  margin: 4vw 0px;
  line-height: 20px;
  vertical-align: middle;
}

.contact-us-container > div > div > img {
  height: 100%;
}

.contact-us-container > div > div:nth-child(1) {

}

.contact-us-container > div > div:nth-child(2) {
  color: #666666;
  margin-left: 3.2vw;
}

.contact-us-container > div > div:nth-child(3) {
  margin-left: 3.2vw;
  color: #333333;
  font-size: 17px;
}
.contact-us-container > div > div:nth-child(3)>a {
  color: #333333;
  font-size: 17px;
}

.contact-us-container > div > div:nth-child(4) {
  color: #333333;
}
</style>