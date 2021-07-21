module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://news-at.zhihu.com',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}