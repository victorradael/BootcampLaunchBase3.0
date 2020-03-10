const fs = require('fs')
const data = require('../data.json')

exports.homeAdmin = (req, res) => {
    return res.render("admin/homeAdmin", { items: data.recipes})
}

exports.create = (req,res) => {
    return res.render("admin/create")
}

exports.showDetails = (req,res) => {
     const id = req.params.id
     
     const foundRecipe = data.recipes.find( recipe => {
         return recipe.id == id
     })

     if(!foundRecipe) return res.send("Recipe Not Found")
    
     const recipe = {
         ...foundRecipe
     }

     return res.render("admin/detailsAdmin", {item: recipe})
}

exports.post = (req,res) => {

    const keys = Object.keys(req.body)

    console.log(req.body)

    for (key of keys) {
        if(req.body[key] == ""){
            return res.send(' Please, fill all fields!')
        }
    }

    let  {
        img_url,
        recipe_name,
        author_name,
        ingredients,
        steps,
        extra_information
    } = req.body

    const created_at = Date.now()

    let id = 1

    const lastRecipe = data.recipes[data.recipes.length -1]

    if(lastRecipe) {
        id = lastRecipe.id + 1
    }

    data.recipes.push({
        id,
        img_url,
        recipe_name,
        author_name,
        ingredients,
        steps,
        extra_information,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send(`Write file error:${err}`)

        return res.redirect("/admin/adicionarReceita")
    })
}

exports.edit = (req,res) => {
    const {id} = req.params

    const foundRecipe = data.recipes.find( recipe => {
        return recipe.id == id
    })

    if(!foundRecipe) return res.send("Recipe Not Found")

    const recipe = {
        ...foundRecipe,
    }


    return res.render('admin/edit', {item: recipe})
}

exports.put = (req,res) => {
    const id = req.body.id
    let index = 0

    const foundRecipe = data.recipes.find( (recipe, foundIndex) => {
        if (recipe.id == id) {
            index = foundIndex
            return true
        }
    })

    if(!foundRecipe) return res.send("Recipe Not Found")

    const recipe = {
        ...foundRecipe,
        ...req.body, 
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send("Write error!")

        return res.redirect(`/admin`)
    })
}

exports.delete = (req,res) => {
    const {id} = req.body

    const filteredRecipes = data.recipes.filter( recipe => {
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send('Delete Error')

        return res.redirect('/admin')
    })
}
