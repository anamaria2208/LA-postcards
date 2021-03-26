let pictures = document.querySelectorAll('.panel');


pictures.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active')

    })
})

function removeActiveClass(){
    pictures.forEach(item => {
        item.classList.remove('active')
    })
}