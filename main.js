import {Player} from './player.js'

//Canvas Variables
const canvas = document.getElementById('game-canvas')
const ctx = canvas.getContext('2d')

canvas.height = 80*(window.innerHeight/100)
canvas.width = 60*(window.innerWidth/100)

const player = new Player(0, 0)

//Drawing Canvas
const testAnimate = () => {
    movement()

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.save()
    
    ctx.translate(canvas.width/2 + player.x, canvas.height/2 + player.y)
    ctx.rotate(ang)
    console.log(ang)

    ctx.fillStyle = 'red'
    ctx.fillRect(player.axis.x, player.axis.y, player.width, player.height)
    ctx.fillStyle = 'blue'
    ctx.fillRect(player.axis.x + 40, player.axis.y - 10, 10, 30)

    ctx.restore()

    requestAnimationFrame(testAnimate)
}

//Movement

const mouse = { x: 0, y: 0 }
let ang = 0

const movement = () => {
    player.x += player.xSpd
    player.y += player.ySpd
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            player.ySpd = -4
            break
        case 'a':
            player.xSpd = -4
            console.log(player.x, player.y)
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

document.addEventListener("mousemove", (e) => {
    const x = e.pageX
    const y = e.pageY
    const w = window.innerWidth / 2
    const h = window.innerHeight / 2

    const deltaX = w - x
    const deltaY = h - y

    ang = playerAngle(deltaY, deltaX)

});

const playerAngle = (y, x) => {
    let rad = Math.atan2(y, x) - (Math.PI/2)
    
    if (rad < 0) rad = rad + (2 * Math.PI)

    return rad
}

testAnimate()