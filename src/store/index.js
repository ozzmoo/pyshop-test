import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './modules/auth'
import Todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Todos
  }
})