import request from '../utils/request'

//!购物车数据列表
export function getCartApi(params){
    return request({
        url:'/cart/index',
        method:'get',
        params
    })
    
}