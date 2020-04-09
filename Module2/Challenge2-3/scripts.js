const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", _ => {
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", _ => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ``
})
