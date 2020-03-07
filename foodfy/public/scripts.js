const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener("click", _ => {
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/receitas/${recipeId}`
    })
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredients")
    const fildContainer = document.querySelectorAll(".ingredient")

    const newField = fildContainer[fildContainer.length - 1].cloneNode(true)

    if(newField.children[0].value == "") return false

    newField.children[0].value == ""
    ingredients.appendChild(newField)
}

function addStep() {
    const steps = document.querySelector("#steps")
    const fildContainer = document.querySelectorAll(".step")

    const newField = fildContainer[fildContainer.length - 1].cloneNode(true)

    if(newField.children[0].value == "") return false

    newField.children[0].value == ""
    steps.appendChild(newField)
}

document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient)

document
    .querySelector(".add-step")
    .addEventListener("click", addStep)

var hides = document.querySelectorAll('.hide')
for(let hide of hides){
    hide.addEventListener('click', function(){
        description = hide.querySelector('.content')
        if(hide.textContent == 'Fechar'){
            hide.textContent = 'Abrir'
            description.classList.remove('active')
        }else{
            hide.textContent = 'Fechar'
            description.classList.add('active')
        }
    })
}