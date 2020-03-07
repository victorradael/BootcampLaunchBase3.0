const express = require('express')
const njk = require('nunjucks')
const routes = require('./routes')

const server = express()
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

njk.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, _ => {
    console.log('Server is Running')
})