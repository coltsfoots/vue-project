import request from '@/utils/request'

export function getUsersList(form, pageIndex, pageSize) {
  const page = {
    pageIndex,
    pageSize
  }
  const data = Object.assign(form, page)
  return request({
    url: '/getUsers',
    method: 'post',
    data
  })
}
