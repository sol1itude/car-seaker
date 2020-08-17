import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    promotionRegistered: true,
    wxCode: '0',
    openId: '0',
    hasSubscribe: -1
  },
  mutations: {
    setOpenId(state, val) {
      state.openId = val;
    }
  },
  actions: {},
  modules: {}
})
