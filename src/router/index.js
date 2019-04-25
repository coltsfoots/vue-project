import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

const _import = page => {
  return () => import('@/views/' + page)
}

export const constantRouterMap = [
  {
    path: '/login',
    component: _import('login/login'),
    hidden: true
  },
  {
    path: '/register',
    component: _import('register/register'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: _import('admin/index'),
        name: 'index',
        meta: {
          title: '首页',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})

export const asyncRouterMap = [

]
