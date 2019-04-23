import { loginByUserName } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'
const user = {
  state: {
    user: '',
    token: getToken(),
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    LoginByUserName({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        loginByUserName(userName, userInfo.passWord).then(response => {
          const data = response.data
          console.log(response)
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}

export default user
