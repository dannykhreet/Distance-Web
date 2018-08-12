import Vue from 'vue'
import Vuex from 'vuex'

import { module as dashboardModule } from './Modules/dashboardModule.js'
import { module as newUniversityModule } from './modules/newUniversityModule.js'
Vue.use(Vuex)

export const actionTypes = {
}

export const mutationTypes = {
}

const modules = {
  dashboard: dashboardModule,
  newUniversity: newUniversityModule
}

const state = {
}

const getters = {
}

const actions = {
}

const mutations = {
}

const store = new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions
})

export default store
