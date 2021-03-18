import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
//添加持久化插件，防止刷新网页后Vuex状态消失
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  //配置持久化插件，防止刷新网页后Vuex状态消失
  plugins: [createPersistedState()]
})

export default store
