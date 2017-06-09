import './assets/js/flexible.js' // 移动端自适应
import './assets/js/swiped.js' // 滑动删除
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import App from './App'
import router from './router'
import api from './api'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import './assets/sass/common.scss'

Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(VueJsonp, 5000);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Icon }
})