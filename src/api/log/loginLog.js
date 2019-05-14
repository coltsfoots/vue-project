import request from '@/utils/request'

export function getLoginLogList(loginLogForm, pageIndex, pageSize) {
  const page = {
    pageIndex,
    pageSize
  }
  const data = Object.assign(loginLogForm, page)
  return request({
    url: '/getLoginLog',
    method: 'post',
    data: { ...data }
  })
}
