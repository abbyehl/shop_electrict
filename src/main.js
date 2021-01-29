import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import "./assets/css/global.css"
import "./assets/fonts/iconfont.css"
// src/main.js
import axios from 'axios'
// 设置请求的根路径
axios.defaults.baseURL = 'http://192.168.88.122:8888/api/private/v1/'
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
