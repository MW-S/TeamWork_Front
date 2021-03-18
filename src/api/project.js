import request from '@/utils/request'
import serverUrl from '@/utils/server'
export function fetchList(data) {
  return request({
    url: serverUrl+'/springboot/project/getList',
    method: 'get',
    params: data
  })
}

export function fetchProject(id) {
  return request({
    url: serverUrl+'/springboot/project/getById',
    method: 'get',
    params: { id }
  })
}

//http://localhost/springboot/task/getUserListByProjectId

export function fetchUsers(id) {
  return request({
    url: serverUrl+'/springboot/task/getUserListByProjectId',
    method: 'get',
    params: { id }
  })
}

export function updateProject(data) {
  return request({
    url: serverUrl+'/springboot/project/update',
    method: 'post',
    data
  })
}

export function joinProject(data) {
  return request({
    url: serverUrl+'/springboot/project/join',
    method: 'post',
    data
  })
}

export function createProject(data) {
  return request({
    url: serverUrl+'/springboot/project/add',
    method: 'post',
    data
  })
}

export function delProject(data) {
  return request({
    url: serverUrl+'/springboot/project/del',
    method: 'post',
    data
  })
}
