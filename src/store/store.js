import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    promotionRegistered: true,
    wxCode: '0',
    hasSubscribe: false,
    openId: '',
    userInfo: {},
    login: false
  },
  mutations: {
    setOpenId(state, val) {
      state.openId = val;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setHasSubscribe(state, val) {
      state.hasSubscribe = (val == 1);
    },
    setLogin(state, val) {
      state.login = (val == 1);
    }
  },
  actions: {},
  modules: {}
})
