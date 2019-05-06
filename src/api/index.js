import request from '@/utils/request'

export function getPanelData() {
  return request({
    url: '/panelData',
    method: 'post'
  })
}
