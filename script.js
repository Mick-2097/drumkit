let playAudio = (filename) => new Audio(filename).play()

let buttons = document.querySelectorAll('button')

document.addEventListener('keydown', event => {
    if (event.key === '7') buttons[0].click()
    if (event.key === '8') buttons[1].click()
    if (event.key === '9') buttons[2].click()
    if (event.key === '4') buttons[3].click()
    if (event.key === '5') buttons[4].click()
    if (event.key === '6') buttons[5].click()
    if (event.key === '1') buttons[6].click()
    if (event.key === '2') buttons[7].click()
    if (event.key === '3') buttons[8].click()
})