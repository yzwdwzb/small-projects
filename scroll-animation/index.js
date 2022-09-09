let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', positionOfBoxes)

positionOfBoxes()

function positionOfBoxes() {
    const triggerBottom = window.innerHeight 

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


