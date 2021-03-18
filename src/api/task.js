import request from '@/utils/request'
import serverUrl from '@/utils/server'

export function fetchList(query) {
  return request({
    url: serverUrl+'/springboot/task/getList',
    method: 'get',
    params: query
  })
}

export function fetchTask(id) {
  return request({
    url: serverUrl+'/springboot/task/getById',
    method: 'get',
    params: { id }
  })
}

export function updateTask(data) {
  return request({
    url: serverUrl+'/springboot/task/update',
   method: 'post',
   data
  })
}

export function createTask(data) {
  return request({
    url: serverUrl+'/springboot/task/add',
    method: 'post',
    data
  })
}

export function delTask(data) {
  return request({
    url: serverUrl+'/springboot/task/del',
    method: 'post',
    data
  })
}
 export function Upload(data) {
   return request({
     url: serverUrl+'/springboot/upload',
     method: 'post',
     ContentType: " multipart / form-data",
     data
   })
 }
