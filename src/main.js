import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueClipboard)
