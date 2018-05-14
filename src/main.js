// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import fastClick from 'fastclick'
import store from './vuex/store'
import Api from './utils/api'
import config from '../config/index'

// init fastClick
fastClick.attach(document.body)


// init global variable
Vue.prototype.$config = process.env.NODE_ENV === 'development' ? config.dev : config.build

Vue.prototype.$store = store
// 实例化接口
Vue.prototype.$api = new Api(Vue.prototype.$config, store);

Vue.filter('removeComma', (number) => {
  return number && number.replace(/,/g, '')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
