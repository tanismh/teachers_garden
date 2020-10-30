import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import Layout from './layout'
//import store from './store/store'// 引入vuex
import './plugins/element.js'
import axios from 'axios';
import api from './api' // 导入api接口
//import VueCookies from 'vue-cookies' 
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/global.css'//导入全局样式表
import './assets/css/bottom.css'
import './assets/css/head_faculty.css'

//Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')