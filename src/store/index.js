import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions:{
    change (ctx, city) {
      ctx.commit('change',city)
    }
  },
  mutations:{
    change(state,city){
      state.city=city
      try{

      }catch (e) {
        localStorage.home = city
      }
      localStorage.home = state.city
    }
  }

})
