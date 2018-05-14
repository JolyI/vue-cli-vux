import Vuex from "vuex";
import Vue from 'vue'
Vue.use(Vuex)

const store  = new Vuex.Store({
    state:{
        loadState:false,
    },
    mutations:{
        loadShow (state){
            state.loadState = true
          },
          loadHide (state){
            state.loadState = false
          },
          loadtToggle (){
            state.loadState = !state.loadState;
          },
    }
})

export  default store