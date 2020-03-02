const express = require('express')
const njk = require('nunjucks')

const server = express()
const recipes = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

njk.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/" , (req, res) => {
    return res.render('home', { items: recipes })
})

server.get("/sobre" , (req, res) => {
    return res.render('sobre')
})

server.get("/receitas" , (req, res) => {

    return res.render('receitas', {items: recipes})
})

server.get("/receitas/:id", (req, res) => {
    const {id} = req.params

    const recipe = recipes.find( recipe => {
        return recipe.id == id
    })

    if(!recipe) {
        return res.send('404 - Page not Found')
    }

    return res.render('receita', { item: recipe })

})

server.listen(5000, _ => {
    console.log('Server is Running')
})