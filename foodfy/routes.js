const express = require('express')
const recipes = require('./controllers/recipes')
const recipesAdmin = require('./controllers/recipesAdmin')

const routes = express.Router()

routes.get("/" , recipes.showHome)
routes.get("/sobre" , recipes.showAbout)
routes.get("/receitas" , recipes.showRecipes)
routes.get("/receitas/:id", recipes.showRecipeId)

routes.get("/admin/adicionarReceita", recipesAdmin.create)
routes.post("/admin/adicionarReceita",recipesAdmin.post)

module.exports = routes