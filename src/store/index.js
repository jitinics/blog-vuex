import LoginModule from './login_module'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const modules = {
  Login: LoginModule
}


export default new Vuex.Store({
  modules
})