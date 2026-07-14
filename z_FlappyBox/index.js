const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const bird = document.querySelector(".birdbox")

const scoreEl = document.querySelector(".score")

const GRID_SIZE = 20
const TILE_COUNT = canvas.width / GRID_SIZE

const minimum = 70 // 70 start
const maximum = 320 // 320 lang cause 320 + bird gap = 430, 500 - 430 = 70 max gap sa ground

let addAndPopController = 6
let runningGap = 140

const state = {
    birdbox: [
        {x: 40, y: 40}
    ],
    obstacles: [
        // {x1: 20, x2: state.obstacles[0].x1 + 20}
        {x: 200}, // 2 blocks = 50px, 1tile means 25x25, x(20) + 2tile gap(50) = x2 = 70
        {x: 300},
        {x: 80},
        {x: 320},
        {x: 120},
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

    function addAndPop() {
        // pra dli per frame/interval mag add and pop since it will result to exponential ahead obstacle
        if (addAndPopController === 0) {
            const toAdd = randInt(minimum, maximum)
            state.obstacles.push({x: toAdd})
            addAndPopController = 6
        } else {
            addAndPopController -= 1
        }

        console.log(state.obstacles.length)
    }

    function move() {
        console.log("checking the fps")
        runningGap -= (1000 / 60) // 60 fps
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
                // i times 100 (60 for width, 90 for gap) + starting gap
                // (i * 150) + 140,
                (i * 150) + runningGap,
                0,
                60,
                coor.x,
            )

            // bottom obstacle
            ctx.fillStyle = "#c08585"
            ctx.fillRect(
                (i * 150) + runningGap,
                // the + 100 is the gap for bird
                coor.x + 110,
                60,
                canvas.height,
            )
        })

        // Draw box only for the game
        ctx.fillStyle = "#0000ff15"
        ctx.fillRect(500,0,700,600)
    }

    function gameLoop() {
        move()
        addAndPop()
        draw()
    }

    // trigger for running
    if (state.running) {
        setInterval(gameLoop, 200)
    } else {
        draw()
    }