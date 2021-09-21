import request from '../utils/request'


//! 首页数据
export function getDateApi(params){
    return request({
        url:'/index/index',
        method:'get',
        params
    })
}