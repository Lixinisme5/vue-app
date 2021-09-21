import axios from 'axios'

let server = axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8001/',//
    setTimeout:5000
})

//!请求拦截器  放token
server.interceptors.request.use(config =>{
    return config
})

//!响应拦截器
server.interceptors.response.use(response =>{
   //1.非200响应
   //2.token过期
   //3.异地登陆
   //4.非对象加密的解密
   return response.data
})

export default server