import request from '@/utils/request'
import serverUrl from '@/utils/server'

export function fetchList(query) {
  return request({
    url: serverUrl+'/springboot/reform/getList',
    method: 'get',
    params: query
  })
}

export function delReform(data) {
  return request({
    url: serverUrl+'/springboot/reform/del',
    method: 'post',
    data
  })
}
