import vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation.js'
import getter from './getter.js'
import action from './action.js'
import module from './module.js'

vue.use(Vuex)

export default new Vuex.Store({
  state:{
    cartList:[],
  },
  mutations:mutation,
  getters:getter,
  actions:action,
  modules:module
})
