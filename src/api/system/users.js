import request from '@/utils/request'

export function getUsersList(form, page) {
  const data = Object.assign(form, page)
  return request({
    url: '/getUsers',
    method: 'post',
    data
  })
}

export function getTenant() {
  return request({
    url: '/getTenant',
    method: 'get'
  })
}
