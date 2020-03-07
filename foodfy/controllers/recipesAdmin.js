const fs = require('fs')
const data = require('../data.json')

exports.create = (req,res) => {
    return res.render("admin/create")
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

