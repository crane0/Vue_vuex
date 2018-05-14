import Vue from 'vue'
import App from './App'
import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  store // 注册上vuex的store: 所有组件对象都多一个属性$store
})
