import request from '../utils/request'


//! 分类数据
export function getSortApi(params){
    return request({
        url:'/catalog/index',
        method:'get',
        params
    })
}

//! 分类数据按id查询
export function getsiseIdApi(params){
    return request({
        url:'/catalog/current',
        method:'get',
        params
    })
}