import request from '@/utils/request'

export function loginByUserName(userName, passWord) {
  const data = {
    userName,
    passWord
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getSimpleName() {
  return request({
    url: '/getSimpleName',
    method: 'get'
  })
}
