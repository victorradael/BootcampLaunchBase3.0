const express = require('express')
const instructors = require('./instructors')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.redirect('/instructors')
})

routes.get('/instructors', (req, res) => {
    return res.render('instructors/index')
})

routes.get('/instructors/create', (req, res) => {
    return res.render('instructors/create')
})
routes.post('/instructors', instructors.post)

routes.put('/instructors', instructors.put)

routes.delete('/instructors', instructors.delete)

routes.get("/instructors/:id", instructors.show)
routes.get("/instructors/:id/edit", instructors.edit)


routes.get('/members', (req, res) => {
    return res.send('members')
})

module.exports = routes