const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const bird = document.querySelector(".birdbox")

const GRID_SIZE = 20
const TILE_COUNT = canvas.width / GRID_SIZE

const state = {
    obstacles: [
        // {x1: 20, x2: state.obstacles[0].x1 + 20}
        {x1: 20, x2: 70} // 2 blocks = 50px, 1tile means 25x25, x1(20) + 2tile gap(50) = x2 = 70
    ],
    running: false
}

console.log(state.obstacles[0].x2)