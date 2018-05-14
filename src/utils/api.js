import Vue from 'vue'
import $http from 'axios'

class Api {
    constructor(config = {},store) {
        this.config = config
        $http.defaults.baseURL = this.config.baseUrl || "";
        console.log(  this.config.baseUrl)
        // $http.defaults.baseURL = 'http://kq.dafycredit.cn/'
        // $http.defaults.baseURL = '/api'
    
        this._interceptor(store)
      }

      _interceptor(store) {
        $http.interceptors.request.use(function (config) {
          store.commit('loadShow')
          if (config.method === "post") {
            config.headers.platform = 'h5'
            config.data && config.data.modal !== false && store.commit('loadShow')
            if (!config.data.channel) {
              config.data.channel = 'WX_OA'
            }
            config.data.userId = sessionStorage.getItem('userId')
            config.data.openId = sessionStorage.getItem("openId")
            config.data.idPerson = sessionStorage.getItem("idPerson")
          } else {
            config.params && config.params.modal !== false && store.commit('loadShow')
          }
          return config
        }, function (error) {
          return Promise.reject(error)
        })
    
        $http.interceptors.response.use(function (response) {
          // 返回值全局处理
          store.commit('loadHide')
          if (response.data.result !== 'success' && response.data.status !== 'success') {
            store.commit("msgPopUp/showPopup", {
              title: '提示',
              content: response.data.message || '系统繁忙，请稍后再试',
              closeIcon: false,
              btnType: 'default',
              buttons: [{ text: '确认' }]
            })
          }
    
          return response
        }, function (error) {
          console.log(error)
          //请求错误全局处理
          store.commit('loadHide')
          store.commit('msgPopUp/showPopup', {
            title: '',
            content: '系统繁忙，请稍后再试',
            buttons: [{ text: '确认' }]
          })
          return Promise.reject(error)
        })
      }
}

export default Api