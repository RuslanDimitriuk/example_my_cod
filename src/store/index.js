import Vue from 'vue'
import Vuex from 'vuex'
import registration from './modules/registration/index'
import main from './modules/main/index'
import global from './modules/global/index'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    registration,
    main,
    global
  }
})
