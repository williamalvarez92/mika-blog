const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app){
    app.use(createProxyMiddleware('/api', { target: 'http://process.db.PORT:4000' }))
}