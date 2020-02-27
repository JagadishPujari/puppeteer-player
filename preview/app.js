var express = require('express')

var http = require('http')

var path = require('path')

var fs = require('fs')

var urlHelper = require('url')

var bodyParser = require('body-parser')

var proxy = require('express-http-proxy')
var cors = require('cors')

http.globalAgent.maxSockets = 100000

var app = express()

// all environments
app.set('port', 4000)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static(path.join(__dirname, '.')))
app.use(cors())

// app.use('/content-plugins', proxy('dev.sunbirded.org', {
//   https: true,
//   proxyReqPathResolver: function (req) {
//     return '/content-plugins' + urlHelper.parse(req.url).path
//   }
// }))

// app.use('/assets/public', proxy('dev.sunbirded.org', {
//   https: true,
//   proxyReqPathResolver: function (req) {
//     return '/assets/public' + urlHelper.parse(req.url).path
//   }
// }))

// app.use('/content/preview', proxy('dev.sunbirded.org', {
//   https: true,
//   proxyReqPathResolver: function (req) {
//     return '/content/preview' + urlHelper.parse(req.url).path
//   }
// }))

var server = http.createServer(app).listen(app.get('port'), 1500)
server.timeout = 0
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'