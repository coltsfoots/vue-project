import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = page => {
  return () => import('@/views/' + page)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: _import('login/login')
    },
    {
      path: '/register',
      component: _import('register/register')
    }
  ]
})
