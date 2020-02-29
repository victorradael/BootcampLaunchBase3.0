const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener("click", _ => {
        const imageId = recipe.getAttribute("id")
        const recipeName = recipe.querySelector("#recipe-name").innerHTML
        const cookName = recipe.querySelector("#cook-name").innerHTML
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/assets/${imageId}.png`
        modalOverlay.querySelector("#recipe-name").innerHTML = recipeName
        modalOverlay.querySelector("#cook-name").innerHTML = cookName
    })
}

document.querySelector(".close-modal").addEventListener("click", _ => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ``
})
