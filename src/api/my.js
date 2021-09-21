import request from '../utils/request'

export function loginApi(params){
    return request({
        url:'/auth/loginByWeb',
        method:'post',
        data:params
    })
}