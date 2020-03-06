const data = require('../data')
const fs = require('fs')

exports.showHome = (req, res) => {
    return res.render('user/home', { items: data })
}

exports.showAbout = (req, res) => {
    return res.render('user/sobre')
}

exports.showRecipes = (req, res) => {
    return res.render('user/receitas', {items: data})
}

exports.showRecipeId = (req, res) => {
    const {id} = req.params

    const recipe = data.find( recipe => {
        return recipe.id == id
    })

    if(!recipe) {
        return res.send('404 - Page not Found')
    }

    return res.render('user/receita', { item: recipe })

}