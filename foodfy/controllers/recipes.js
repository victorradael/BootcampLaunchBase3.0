const {recipes} = require('../data.json')

exports.showHome = (req, res) => {
    return res.render('user/home', { items: recipes })
}

exports.showAbout = (req, res) => {
    return res.render('user/sobre')
}

exports.showRecipes = (req, res) => {
    return res.render('user/receitas', {items: recipes})
}

exports.showRecipeId = (req, res) => {
    const {id} = req.params

    const recipe = recipes.find( recipe => {
        return recipe.id == id
    })

    if(!recipe) {
        return res.send('404 - Page not Found')
    }

    return res.render('user/receita', { item: recipe })

}