const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const bird = document.querySelector(".birdbox")

const scoreEl = document.querySelector(".score")

const GRID_SIZE = 20
const TILE_COUNT = canvas.width / GRID_SIZE

const state = {
    birdbox: [
        {x: 40, y: 40}
    ],
    obstacles: [
        // {x1: 20, x2: state.obstacles[0].x1 + 20}
        {x: 200}, // 2 blocks = 50px, 1tile means 25x25, x(20) + 2tile gap(50) = x2 = 70
        {x: 300},
        {x: 100},
        {x: 350},
    ],
    running: false,
    score: 0,
}

console.log(state.obstacles[0].x2)

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function startGame() {
        state.running = true
        scoreEl.textContent = "Obstacle Passed: " + state.score
    }

    function move() {

    }

    function draw() {
        // Canvas BG
        ctx.fillStyle = "#e3e6b3"
        ctx.fillRect(0,0,canvas.width,canvas.height)

        // Obstacle
        state.obstacles.forEach((coor, i) => {

            // top obstacle
            ctx.fillStyle = "#04fd00"
            ctx.fillRect(
                // i times 100 (50 for width, 60 for gap) + starting gap
                (i * 110) + 140,
                0,
                40,
                coor.x,
            )

            // bottom obstacle
            ctx.fillStyle = "#c08585"
            ctx.fillRect(
                (i * 110) + 140,
                // the + 90 is the gap for bird
                coor.x + 90,
                40,
                canvas.height,
            )
        })
    }

    draw()