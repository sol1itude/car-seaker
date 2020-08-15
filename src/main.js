import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueClipboard from 'vue-clipboard2'
import weui from "weui.js/dist/weui";
import 'weui'

Vue.prototype.$weui = weui;

Vue.config.productionTip = false;
Vue.prototype.HOST = '/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueClipboard)
