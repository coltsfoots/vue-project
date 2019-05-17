import Cookies from 'js-cookie'
import { getSimpleName } from '@/api/login'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    simpleName: []
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    GET_SIMPLE_NAME: (state, simpleName) => {
      state.simpleName = simpleName
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    getSimpleName({ commit }) {
      getSimpleName().then(response => {
        commit('GET_SIMPLE_NAME', response.data)
      })
    }
  }
}

export default app
