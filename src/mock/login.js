const user = {
  admin: {
    roles: ['admin'],
    token: 'token'
  },
  user: {
    roles: ['user'],
    token: 'token'
  }
}

export default {
  loginByUserName: config => {
    const { userName } = JSON.parse(config.body)
    return user[userName]
  }
}
