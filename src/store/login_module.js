import  userProvider  from '../resource/UserProvider'

const loginModule = {
  namespaced: true,
  state: {
    userData: {}
  },
  mutations: {
    SET_USER_DATA (state, data) {
      state.userData = data
    }
  },
  actions: {
    login: async ({ commit }, {email, password}) => {
      const result = await userProvider.signIn(email, password)
      commit('SET_USER_DATA', result.data)
    }
  },
  getters: {
    getUserData: (state) => {
      return state.userData
    }
  }
}

export default loginModule