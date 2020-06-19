import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : localStorage.getItem('user') || '',
    user_dep : localStorage.getItem('user_dep') || '',
    isLoggedIn: localStorage.getItem('isLoggedIn')
  },

  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },

    auth_user(state, user) {
      state.user = user
    },

    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },

  actions: {
    login({commit}, user){
      return new Promise(async (resolve, reject) => {
        commit('auth_request')
        await axios({url: '/api/auth/signin', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = JSON.stringify(resp.data.user[0])
          const user_dep = JSON.stringify(resp.data.user_dep[0])
          const user_pos = JSON.stringify(resp.data.user_pos[0])

          localStorage.setItem('token', token)
          localStorage.setItem('user', user)
          localStorage.setItem('user_dep', user_dep)
          localStorage.setItem('user_pos', user_pos)
          localStorage.setItem('isLoggedIn', true)

          commit('auth_success', token)
          commit('auth_user', user)

          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.removeItem('isLoggedIn')
          localStorage.removeItem('user_dep')
          localStorage.removeItem('user_pos')
          reject(err)
        })
      })
    },

    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user_dep')
        localStorage.removeItem('user_pos')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  }
})

export default store