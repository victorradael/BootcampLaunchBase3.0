const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener("click", _ => {
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/receitas/${recipeId}`
    })
}