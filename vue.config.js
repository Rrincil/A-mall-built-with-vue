const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    pages: {
        //（1）输出一个页面
        //  main: {
        //    entry: 'src/main.js',
        //    template: 'public/index.html',
        //    filename: 'maker.html',
        //    chunks: ['chunk-vendors', 'chunk-common', 'index']
        //  },
        //（2）输出多个页面
        m_index: {
          template: "src/modules/mobile/m_index.html",
          entry: "src/modules/mobile/m_main.js",
          filename: "m_index.html",
          title: "m_index",
          keywords: "333",
          description: "444",
        },
        index: {
          template: "public/index.html",
          entry: "src/main.js",
          filename: "index.html",
          title: "index",
          keywords: "333",
          description: "444",
        }
      },


    assetsDir: 'static',
    parallel: false,
    publicPath: './',  
    devServer: {
        open: true,
        // host:'http://101.201.220.43',
        host: 'localhost',
        // host:'http://396p89578i.zicp.vip',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/api': {
                target: 'http://101.201.220.43/api',
                // target: 'http://localhost:3000/api',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
            
        },
        disableHostCheck: true,
    }
}

