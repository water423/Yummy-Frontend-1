import Vue from 'vue'
import Vuex from 'vuex'

// vuex 挂载到vue上面
Vue.use(Vuex)

/**
 * state存储状态信息
 * @type {{name: null}}
 */
const state = {
  name: null,
  token: null
}

/**
 * mutations 操作state对象属性的方法
 * @type {{setName(*, *): void, getMyName(*): null}}
 */
const mutations = {
  getMyName (state) {
    return state.name
  },
  setName (state, name) {
    state.name = name
  },

  // token
  getToken (state) {
    return state.token
  },
  clearToken (state) {
    state.token = null
  }
}

// vuex对象的创建
const store = new Vuex.Store({
  state,
  mutations
})
// 导出
export default store
