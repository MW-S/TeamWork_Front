import request from '@/utils/request'
import serverUrl from '@/utils/server'

export function login(data) {
  return request({
    url: serverUrl+'/springboot/auth/login', // '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: serverUrl+'/springboot/auth/register', // '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function checkIsAdmin() {
  return request({
    url: serverUrl+'/springboot/auth/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getList(query) {
  return request({
    url: serverUrl+'/springboot/user/getList',
    method: 'get',
    params: query
  })
}

export function createUser(data) {
  return request({
    url: serverUrl+'/springboot/auth/register',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: serverUrl+'/springboot/user/update',
    method: 'post',
    data
  })
}

export function delUser(data) {
  return request({
    url: serverUrl+'/springboot/user/del',
    method: 'post',
    data
  })
}
