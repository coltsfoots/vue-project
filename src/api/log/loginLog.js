import request from '@/utils/request'

export function getLoginLogList(loginLogForm, page) {
  const data = Object.assign(loginLogForm, page)
  return request({
    url: '/getLoginLog',
    method: 'post',
    data
  })
}

export function getErrorLogList(errorLogForm, page) {
  const data = Object.assign(errorLogForm, page)
  return request({
    url: '/getErrorLog',
    method: 'post',
    data
  })
}
