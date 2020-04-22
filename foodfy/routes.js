const express = require('express')
const recipes = require('./controllers/recipes')
const recipesAdmin = require('./controllers/recipesAdmin')

const routes = express.Router()

routes.get("/" , recipes.showHome)
routes.get("/sobre" , recipes.showAbout)
routes.get("/receitas" , recipes.showRecipes)
routes.get("/receitas/:id", recipes.showRecipeId)

routes.get("/admin", recipesAdmin.homeAdmin)
routes.get("/admin/adicionarReceita", recipesAdmin.create)
routes.get("/admin/receita/:id", recipesAdmin.showDetails)
routes.get("/admin/:id/edit", recipesAdmin.edit)
routes.post("/admin/adicionarReceita",recipesAdmin.post)
routes.put("/admin", recipesAdmin.put)
routes.delete("/admin", recipesAdmin.delete)

module.exports = routes