const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const bird = document.querySelector(".birdbox")

const scoreEl = document.querySelector(".score")

const GRID_SIZE = 20
const TILE_COUNT = canvas.width / GRID_SIZE

const minimum = 70 // 70 start
const maximum = 320 // 320 lang cause 320 + bird gap = 430, 500 - 430 = 70 max gap sa ground

let addAndPopController = 12
let runningGap = 140
let indexToPop = 0
let additionalAdd = 3
let downfall = 16


const state = {
    birdbox: [
        {x: 20, y: 100}
    ],
    obstacles: [
        // {x1: 20, x2: state.obstacles[0].x1 + 20}
        {x: 200, y: null}, // 2 blocks = 50px, 1tile means 25x25, x(20) + 2tile gap(50) = x2 = 70
        {x: 300, y: null},
        {x: 80, y: null},
        {x: 320, y: null},
        {x: 120, y: null},
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
    }

    function addAndPop() {
        // pra dli per frame/interval mag add and pop since it will result to exponential ahead obstacle
        if (addAndPopController === 0) {
            const toAdd = randInt(minimum, maximum)
            state.obstacles.push({x: toAdd, y: null})
            // kaduha mag add every 3 times (since sa pang 3 last before maapsan sa speed)
            if (additionalAdd === 0) {
                const toAdd2 = randInt(minimum, maximum)
                state.obstacles.push({x: toAdd2, y: null})
                additionalAdd = 3
            } else {
                additionalAdd -= 1
            }
            // state.obstacles.shift() // pop/remove hehe pop means last sa array to delete so not pop
            // diz dont work, mo balhin ug index, mo sibog visually, so e null nlng value ni array
            // state.obstacles[indexToPop].x = null // ani nlng pro ang array exponential na ang size
            state.obstacles.shift()
            runningGap += 190 // nawala gid stutter effect hahaha im so brayt (self glaze)
            state.score++
            indexToPop++
            addAndPopController = 12
        } else {
            addAndPopController -= 1
        }

        console.log(state.obstacles.length)
    }

    function move() {
        console.log("checking the fps")
        runningGap -= (1000 / 60) // 60 fps
        state.obstacles.forEach((coor, i) => {
            // console.log("NULL BA? " + coor.y)
            coor.y -= (1000 / 60)
        })
        scoreEl.textContent = "Obstacle Passed: " + state.score
        // state.score = state.obstacles.filter(obs => obs.x === null).length
    }

    // DAPAT NAAY VELOCITY DROP, SAME SA JAVASWING FLAPPY
    function birdMove() {
        // state.birdbox[0].y -= 30
        state.birdbox[0].y += downfall
        downfall += 6 // velocity drops until space ulit
    }

    function collision() {
        let a = state.obstacles
        let b = state.birdbox

        // instead of all obstacles e check dri, dapat ang next sa null lang
        // thats sounds a good plan, however mo dghn ghpon ang array, now my plan
        // is when we remove/shift obstacle that already passed, mag add gap sa harap 
        // pra dli amg stutter effect and mka normal forloop rta dri

        for (let i = 0; i < state.obstacles.length; i++) {
            if (a[i].y < (b[0].x + GRID_SIZE) && // si x pala ay ang dynamic computation sa draw
                b[0].x < (a[i].y + 60) &&
                a[i].x > (b[0].y + GRID_SIZE) &&
                b[0].y < a[i].x) {// since height gamit ang coor x eh
                    document.querySelector(".instruction").textContent = "YAWA NABALI PAGSTART UG CODE"
            }
        }
        if (b[0].y < 0) {
            document.querySelector(".instruction").textContent = "NALAPAS SA ATOP"
        }
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
                (i * 190) + runningGap,
                0,
                60,
                coor.x,
            )

            // bottom obstacle
            ctx.fillStyle = "#c08585"
            if (coor.x !== null) { // pra if ma null na, dli na mag draw ug sa ubos nga obs
                ctx.fillRect(
                (i * 190) + runningGap,
                // the + 100 is the gap for bird
                coor.x + 120,
                60,
                canvas.height,
                )
            }

            // adding the y that shouldhavebeen the x
            coor.y = (i * 190) + runningGap

            // birdbox
            ctx.fillStyle = "#240027"
            ctx.fillRect(
                state.birdbox[0].x,
                state.birdbox[0].y,
                GRID_SIZE,
                GRID_SIZE,
            )

            // i should draw the up sprite and downfall sprite for box so it will be ready for
            // true bird, but not this time, its just for practice, ill slay more in my intended Game using Canvas JS
        })

        // Draw box only for the game
        ctx.fillStyle = "#0000ff15"
        ctx.fillRect(500,0,700,600)
    }

    function gameLoop() {
        birdMove()
        move()
        addAndPop()
        draw()
        collision()
    }

    // Initial Draw
    draw()

    // Listener Draft and Trigger Game
    document.addEventListener("keydown", (e) => {
        let isSpaceBar = false
        if (event.code === 'Space') {
            isSpaceBar = true
            state.birdbox[0].y -= 42 // since kda space rmn siya mo up, diri nlng ni
            downfall = 16 // reset veolcity drop
        }

        if (!state.running && isSpaceBar) {
            setInterval(gameLoop, 200)
            state.running = true
            return
        }
    })

    // Session   z_flappybox collision if not executed
    // Continue  opencode -s ses_09b054d8bffecRMBRffhOgmc72