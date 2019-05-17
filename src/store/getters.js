const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  simpleName: state => state.app.simpleName,
  sidebar: state => state.app.sidebar,
  permissionRouters: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  cachedViews: state => state.tagsView.cachedViews,
  visitedViews: state => state.tagsView.visitedViews
}

export default getters
