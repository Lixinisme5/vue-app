const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {


    configureWebpack:{
        resolve:{
            alias:{
                //!目录的映射
                '@':resolve('src'),
                '@a':resolve('src/assets'),
                '@c':resolve('src/components'),
                '@p':resolve('src/pages'),
            }
        }
    },
    //!配置代理
    // devServer: {
    //     port: 8080,
    //     proxy: {
    //         '/api': {
    //             target: "http://kumanxuan1.f3322.net:8001/",
    //             pathRewrite: {
    //                 // '^/api': ''
    //             }
    //         }
    //     }
    // }
}


