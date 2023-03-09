import {Player} from './player.js'

//Canvas Variables
const canvas = document.getElementById('game-canvas')
const ctx = canvas.getContext('2d')

canvas.height = 80*(window.innerHeight/100)
canvas.width = 60*(window.innerWidth/100)

const player = new Player(canvas.width/2 - 20, canvas.height/2 - 20)

//Drawing Canvas
const testAnimate = () => {
    movement()

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'red'
    ctx.fillRect(player.x, player.y, player.width, player.height)
    ctx.fillStyle = 'blue'
    ctx.fillRect(player.x + 30, player.y - 30, 10, 30)

    requestAnimationFrame(testAnimate)
}

//Movement
const movement = () => {player.x += player.xSpd; player.y += player.ySpd}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            player.ySpd = -4
            break
        case 'a':
            player.xSpd = -4
            break
        case 's':
            player.ySpd = 4
            break
        case 'd':
            player.xSpd = 4
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            player.ySpd = 0
            break
        case 'a':
            player.xSpd = 0
            break
        case 's':
            player.ySpd = 0
            break
        case 'd':
            player.xSpd = 0
            break
    }
})



console.log(player)
testAnimate()