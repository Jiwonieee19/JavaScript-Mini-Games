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
        {x1: 20, x2: 70}, // 2 blocks = 50px, 1tile means 25x25, x1(20) + 2tile gap(50) = x2 = 70
        {x1: 30, x2: 80},
        {x1: 10, x2: 60},
        {x1: 40, x2: 90},
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
        scoreEl.textContent = "Ha"
    }
