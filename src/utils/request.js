import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { showLoading, hideLoading } from './loading'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['A-Token'] = getToken()
  }
  showLoading()
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  hideLoading()
  return response.data
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 3000
  })
  hideLoading()
  return Promise.reject(error)
})

export default service

