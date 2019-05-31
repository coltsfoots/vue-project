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
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'shop',
        component: _import('shopTenant/index'),
        name: 'shop',
        meta: {
          title: '商户管理',
          icon: 'icon'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'resource',
    meta: {
      title: '资源管理',
      icon: 'icon'
    },
    children: [
      {
        path: 'site',
        component: _import('resourceManage/sitemanage'),
        name: 'sitemanage',
        meta: {
          title: '场所管理'
        }
      },
      {
        path: 'equipment',
        component: _import('resourceManage/equipmentmanage'),
        name: 'equipmentmanage',
        meta: {
          title: '设备管理'
        }
      },
      {
        path: 'commodity',
        component: _import('resourceManage/commoditymanage'),
        name: 'commoditymanage',
        meta: {
          title: '商品管理'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'order',
    children: [
      {
        path: 'business',
        component: _import('orderManage/businessorder'),
        name: 'business',
        meta: {
          title: '业务订单',
          icon: 'icon'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'finance',
    meta: {
      title: '财务管理',
      icon: 'icon'
    },
    children: [
      {
        path: 'reconciliation',
        component: _import('financeManage/finacereconciliation'),
        name: 'reconciliation',
        meta: {
          title: '财务对账'
        }
      },
      {
        path: 'bill',
        component: _import('financeManage/accountbill'),
        name: 'bill',
        meta: {
          title: '分账账单'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'icon'
    },
    children: [
      {
        path: 'user',
        component: _import('systemManage/users'),
        name: 'user',
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'organization',
        component: _import('systemManage/organization'),
        name: 'organization',
        meta: {
          title: '组织架构'
        }
      },
      {
        path: 'role',
        component: _import('systemManage/roles'),
        name: 'role',
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'menu',
        component: _import('systemManage/menus'),
        name: 'menu',
        meta: {
          title: '菜单管理'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'log',
    meta: {
      title: '日志管理',
      icon: 'icon'
    },
    children: [
      {
        path: 'loginlog',
        component: _import('logManage/loginlog'),
        name: 'loginlog',
        meta: {
          title: '登陆日志'
        }
      },
      {
        path: 'errorlog',
        component: _import('logManage/errorlog'),
        name: 'errorlog',
        meta: {
          title: '异常日志'
        }
      }
    ]
  }
]

export default new Router({
  // mode: 'history',
  routes: constantRouterMap
})

export const asyncRouterMap = [

]
