import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

/*
* 这里创建 store对象
*   在入口 main.js中进行注册
* */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
