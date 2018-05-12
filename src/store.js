import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state对象，类似于data
const state = {
  count: 0
}

/*
* mutations可以通过各个方法，直接更新state
*   mutations中，只能包含有更新state的同步代码，也不会有其他的逻辑
* */
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

/*
* action通过commit()，触发 mutation的调用，间接更新 state
*   commit('mutation函数名')
* 一个方法就是一个action
* */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2 !==0){
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },
}

/*
* getters对象
*   包含了计算属性的getter方法
*   这些计算属性，是依赖于state状态管理的属性的
* */
const getters = {
  oddOrEven (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  },
  count (state) {
    return state.count
  }
}

/*
* 暴露Vuex实例对象的 Store方法
*   创建了store实例对象  $store
*   所有的组件对象都可见。
* */
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
