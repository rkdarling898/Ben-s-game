class Player {
    constructor(x,y,name = "Benkanu Haiyani") {
        this.name = name
        this.x = x
        this.y = y
        this.xSpd = 0
        this.ySpd = 0
        this.width = 40
        this.height = 40
        this.axis = {x: this.x - this.width/2, y: this.y - this.height/2}
        this.direction = 0
        this.skills = {}
    }

    draw(ctx) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.x + 40, this.y - 40, 10, 20)
    }
}

export {Player}