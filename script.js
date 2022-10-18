//  Play audio on click
let playAudio = (filepath) => new Audio(filepath).play()

//  Key mapping
let buttons = document.querySelectorAll('.button')
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
    if (event.key === '-') colorButton.click()
})

//  Color change button
let colors = [
        'var(--red)', 
        'var(--pink)', 
        'var(--teal)', 
        'var(--green)', 
        'var(--blue)', 
        'var(--yellow)', 
        'var(--orange)'
    ]
let colorButton = document.querySelector('.color')
let root = document.querySelector(':root')
let colorIndex = 0
let changeColor = () => {
    if (colorIndex < colors.length - 1) {
        colorIndex++
    } else {
        colorIndex = 0
    }
    root.style.setProperty('--current', colors[colorIndex])
} 


//  Tempo
let tempoInput = document.querySelector('.tempoInput')
let play = false
tempoInput.addEventListener('click', () => play = false)
let startStop = () => {
    play = !play
    let metronome = setInterval(() => {
        if (play) {
            playAudio('/sounds/HATS/HEATWAV - C-19 Hi-Hat.wav')
        } else {
            clearInterval(metronome)
        }
    }, Math.round(60000 / tempoInput.value));
}