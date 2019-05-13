import request from '@/utils/request'

export function getLoginLogList(loginLogForm, page) {
  const data = Object.assign(loginLogForm, page)
  return request({
    url: '/getLoginLog',
    method: 'post',
    data
  })
}
