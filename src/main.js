import Vue from 'vue'
import App from './App.vue'
import './quasar'
import router from './router'
import './styles/labtop.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
