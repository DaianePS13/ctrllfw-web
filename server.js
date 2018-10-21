// https://www.npmjs.com/package/express
var express = require('express')
// https://nodejs.org/api/path.html
var path = require('path')

/**
 * Set up route for static website
 */
var app = express()
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Express server config
 */
var host = process.env.HOST || '0.0.0.0'
var port = process.env.VCAP_APP_PORT || process.env.PORT || 8080
app.listen(port, host, () => {
    console.log(`Your website is up and running at ${host}:${port}`)
})
