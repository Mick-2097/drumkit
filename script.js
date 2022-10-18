//  Buttons play sounds
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

//  Color button
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

//  Metronome
let tempoInput = document.querySelector('.tempoInput')
let tempoButton = document.querySelector('.tempoButton')

let play = false
tempoInput.addEventListener('click', () => play = false)

// let startStop = () => {
//     play = !play

//     let metronome = setInterval(() => {
//         if (play) {
//             tempoButton.style.backgroundColor = 'var(--current)'
//             playAudio('/sounds/HATS/HEATWAV - Cracked Hi-Hat.wav')
//             setTimeout(() => {
//                 tempoButton.style.backgroundColor = 'var(--mpc)'
//             }, 100);

//         } else {
//             clearInterval(metronome)
//             tempoButton.style.backgroundColor = 'var(--mpc)'
//         }
//     }, Math.round(60000 / tempoInput.value))
// }

let startStop = () => {
    play = !play

    let metronome = setInterval(() => {
        if (play) {
            playAudio('https:/\/raw.githubusercontent.com/Mick-2097/drumkit/master/sounds/HATS/HEATWAV - Cracked Hi-Hat.wav')
            setTimeout(() => {
                tempoButton.style.backgroundColor = 'var(--mpc)'
            }, 100);
        } else {
                clearInterval(metronome)
                tempoButton.style.backgroundColor = 'var(--mpc)'
        }
    }, Math.round(60000 / tempoInput.value))
}