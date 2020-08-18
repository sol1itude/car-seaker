<template>
  <div>
    <div
        class="my-profile"
        @touchmove.prevent>
      <div
          class="my-profile-name-container">
        <div>
          姓名
        </div>
        <div>
          <input
              placeholder="请输入"
              type="text"
              name="name">
        </div>
      </div>
      <div
          class="my-profile-mobile-container">
        <div>
          手机号
        </div>
        <div>
          <input
              placeholder="请输入"
              type="text"
              name="name">
        </div>
      </div>
      <div
          class="my-profile-location-container">
        <div>
          所属区域
        </div>
        <div
            @click="showLocationPicker">
          <div>
            {{getLocation}}
          </div>
          <div>
            <img
                src="~assets/img/common/arrow_right_gray.png"
                alt=">">
          </div>
        </div>
      </div>
      <div
          class="my-profile-career-container">
        <div>
          是否从事二手车行业
        </div>
        <div
            @click="showCareerPicker">
          <div>
            {{getCareer}}
          </div>
          <div>
            <img
                src="~assets/img/common/arrow_right_gray.png"
                alt=">">
          </div>
        </div>
      </div>
      <div
          @click="saveProfileEdit"
          class="my-profile-btn">
        立即提交
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  data() {
    return {
      career: null,
      location: [],
      locations: [
        {
          label: '北京',
          value: 0,
          children: [
            {
              label: '海淀区',
              value: 1
            },
            {
              label: '朝阳区',
              value: 2
            }
          ]
        },
        {
          label: '天津',
          value: 1,
          children: [
            {
              label: '南开区',
              value: 1,
              disabled: true // 不可用
            },
            {
              label: '河西区',
              value: 2
            },
            {
              label: '河北区',
              value: 3
            }
          ]
        },
        {
          label: '河北',
          value: 3,
          children: [
            {
              label: '石家庄',
              value: 1
            },
            {
              label: '保定',
              value: 2
            }
          ]
        }
      ]
    }
  },
  methods: {

    //TODO 数据校验
    regxMobile() {
      let mobileRegx = /^1[3456789]\d{9}$/;
      return mobileRegx.test(this.mobile);
    },
    showLocationPicker() {
      let _this = this;
      this.$weui.picker(_this.locations, {
        className: 'my-custom-picker',
        container: 'body',
        defaultValue: [1, 3],
        onConfirm: function (result) {
          console.log(result);
          _this.location.splice(0,20)
          _this.location.push(...result)
        },
        title: '所在区域'
      })
    },
    showCareerPicker() {
      let _this = this;
      this.$weui.picker(
          [
            {
              label: '是',
              value: 1,
            },
            {
              label: '否',
              value: 0,
            }
          ], {
            className: 'my-custom-picker',
            container: 'body',
            defaultValue: [0],
            onConfirm: function (result) {
              console.log(result)
              _this.career = (result[0].value === 1)
            },
            title: '是否从事二手车行业'
          })
    },
    saveProfileEdit() {
      //TODO 发送网络请求
      console.log(this.location)
      this.$router.push('/profile')
    }
  },
  computed: {
    getCareer() {
      return this.career == null ? '请选择' : this.career ? '是' : '否'
    },
    getLocation() {
      return this.location.length === 0?'请选择':(this.location[0].label+'-'+this.location[1].label)
    }
  }
}
</script>
<style
    scoped>
.my-profile {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: #f8f8f8;
}

.my-profile-name-container {
  height: 56px;
  width: 100%;
  position: relative;
  padding: 0px 20px;
  border-bottom: 1px solid #dddddd;
}

.my-profile-name-container > div {
  display: inline-block;
  height: 100%;
}

.my-profile-name-container > div:nth-child(1) {
  font-size: 14px;
  color: #333;
  line-height: 56px;
}

.my-profile-name-container > div:nth-child(2) {
  position: absolute;
  right: 20px;
}

.my-profile-name-container > div:nth-child(2) > input {
  height: 56px;
  width: 220px;
  text-align: right;
  outline: none;
  border: none;
  background: transparent;
}

.my-profile-name-container > div:nth-child(2) > input::placeholder {
  font-size: 14px;
  color: #999999;
}


.my-profile-mobile-container {
  height: 56px;
  width: 100%;
  position: relative;
  padding: 0px 20px;
  border-bottom: 1px solid #dddddd;
}

.my-profile-mobile-container > div {
  display: inline-block;
  height: 100%;
}

.my-profile-mobile-container > div:nth-child(1) {
  font-size: 14px;
  color: #333;
  line-height: 56px;
}

.my-profile-mobile-container > div:nth-child(2) {
  position: absolute;
  right: 20px;
}

.my-profile-mobile-container > div:nth-child(2) > input {
  height: 56px;
  width: 220px;
  text-align: right;
  outline: none;
  border: none;
  background: transparent;
}

.my-profile-mobile-container > div:nth-child(2) > input::placeholder {
  font-size: 14px;
  color: #999999;
}

.my-profile-location-container {
  height: 56px;
  width: 100%;
  position: relative;
  padding: 0px 20px;
  border-bottom: 1px solid #dddddd;
}

.my-profile-location-container div {
  display: inline-block;
  height: 100%;
  line-height: 56px;
}

.my-profile-location-container > div:nth-child(1) {
  color: #333333;
  font-size: 14px;
}

.my-profile-location-container > div:nth-child(2) {
  position: absolute;
  right: 20px;
}

.my-profile-location-container > div:nth-child(2) > div:nth-child(1) {
  color: #999999;
  font-size: 14px;
  position: relative;
  right: 8px;
}

.my-profile-location-container > div:nth-child(2) > div:nth-child(2) {
  width: 10px;
}

.my-profile-location-container > div:nth-child(2) > div:nth-child(2) > img {
  width: 100%;
  vertical-align: middle;
}


.my-profile-career-container {
  height: 56px;
  width: 100%;
  position: relative;
  padding: 0px 20px;
  border-bottom: 1px solid #dddddd;
}

.my-profile-career-container div {
  display: inline-block;
  height: 100%;
  line-height: 56px;
}

.my-profile-career-container > div:nth-child(1) {
  color: #333333;
  font-size: 14px;
}

.my-profile-career-container > div:nth-child(2) {
  position: absolute;
  right: 20px;
}

.my-profile-career-container > div:nth-child(2) > div:nth-child(1) {
  color: #999999;
  font-size: 14px;
  position: relative;
  right: 8px;
}

.my-profile-career-container > div:nth-child(2) > div:nth-child(2) {
  width: 10px;
}

.my-profile-career-container > div:nth-child(2) > div:nth-child(2) > img {
  width: 100%;
  vertical-align: middle;
}

.my-profile-btn {
  position: relative;
  width: 240px;
  top: 30px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  background: #716dff;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  left: calc(50% - 120px);
}
</style>