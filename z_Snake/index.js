/*
  ──────────────────────────────────────────────────────────
  SNAKE GAME  —  Clean Canvas Implementation
  ──────────────────────────────────────────────────────────
  Compared to your original DOM‑based approach:

  1. STATE  ≠  DOM
     Your code stored game state inside HTML elements
     (reading positions via getComputedStyle).  Here we
     keep a simple JavaScript object (snake, food, score).
     The DOM / Canvas is only for *drawing*.

  2. GRID  instead of raw pixels
     A 20×20 grid means the snake moves in whole cells.
     No more velocity, coordinate‑mapping, or messy
     top/left arithmetic.

  3. GAME LOOP  separated from input
     setInterval runs the update cycle.  Keyboard events
     only flip a direction — they don't start/stop the
     loop or set velocities.
  ──────────────────────────────────────────────────────────
*/

// ─── DOM references ──────────────────────────────────────
// Canvas is a single drawable surface.  One element
// replaces your  <li> + head + 3x body + food  divs.
const canvas = document.getElementById("game");
const ctx    = canvas.getContext("2d");

// Grab the score <p> and the GAME OVER <p> you already
// have in the HTML — we just update their textContent.
const scoreEl = document.querySelector(".score");
const overEl  = document.querySelector(".over");

// ─── Constants ───────────────────────────────────────────
const GRID_SIZE  = 20;        // each cell is 20×20 px
const TILE_COUNT = canvas.width / GRID_SIZE;  // 400/20 = 20

// ─── Game state ──────────────────────────────────────────
// Instead of 15+ loose variables, everything lives inside
// one object.  Cleaner and easier to reset.
const state = {
  // Snake is an array of {x, y} grid coordinates.
  // Index 0 = head, each following = body segment.
  snake: [
    { x: 10, y: 10 },   // head
    { x:  9, y: 10 },   // body
    { x:  8, y: 10 },   // body
    { x:  7, y: 10 },   // body
  ],
  // Which way is the snake moving RIGHT NOW.
  // Your code called this `prevMove` AND used it as a
  // direction lock.  Same idea here.
  direction: { x: 1, y: 0 },  // 1,0 = moving right
  // The player's *next* requested direction.
  // We buffer this so the player can press two keys
  // in quick succession without losing a turn.
  nextDirection: { x: 1, y: 0 },
  food:  { x: 15, y: 15 },
  score: 0,
  // Is the game currently running?
  running: false,
  // Prevent the same turn from being updated twice.
  // (A player pressing two keys inside one game tick)
  directionChangedThisTick: false,
};

// ─── Helper: random integer ─────────────────────────────
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ─── Spawn food NOT on the snake ─────────────────────────
function spawnFood() {
  /*
    Your rePositionFood placed food at *any* random pixel,
    possibly inside the snake.  Here we loop until we find
    an empty cell.
  */
  let newFood;
  let onSnake;
  do {
    newFood = {
      x: randInt(0, TILE_COUNT - 1),
      y: randInt(0, TILE_COUNT - 1),
    };
    // Check if any snake segment occupies this cell.
    onSnake = state.snake.some(
      seg => seg.x === newFood.x && seg.y === newFood.y
    );
  } while (onSnake);
  state.food = newFood;
}

// ─── Reset everything ────────────────────────────────────
function startGame() {
  /*
    Your startGame only set `moving = true` and started the
    interval.  A proper reset puts every value back to
    square one — important when the player wants to replay.
  */
  state.snake = [
    { x: 10, y: 10 },
    { x:  9, y: 10 },
    { x:  8, y: 10 },
    { x:  7, y: 10 },
  ];
  state.direction      = { x: 1, y: 0 };
  state.nextDirection  = { x: 1, y: 0 };
  state.score          = 0;
  state.running        = true;

  scoreEl.textContent  = "TOTAL SCORE: 0";
  overEl.style.display = "none";

  spawnFood();
}

// ─── Game logic (runs every tick) ────────────────────────
function update() {
  if (!state.running) return;

  // 1. Accept the buffered direction if it's not a 180°.
  const nd = state.nextDirection;
  const cd = state.direction;
  // "not opposite"  →  (dx + nx !== 0  ||  dy + ny !== 0)
  // If you're moving right (1,0) and press left (-1,0),
  // 1 + (-1) === 0 → rejected.  You can't reverse into
  // yourself.
  if (nd.x !== -cd.x || nd.y !== -cd.y) {
    state.direction = { x: nd.x, y: nd.y };
  }

  // 2. Calculate the new head position.
  const head = state.snake[0];
  const newHead = {
    x: head.x + state.direction.x,
    y: head.y + state.direction.y,
  };

  // 3. Wall collision — GAME OVER.
  /*
    Your gameOverChecker read getComputedStyle and compared
    against window.innerWidth / innerHeight.  With a grid we
    just check array bounds — simpler and faster.
  */
  if (
    newHead.x < 0 || newHead.x >= TILE_COUNT ||
    newHead.y < 0 || newHead.y >= TILE_COUNT
  ) {
    state.running = false;
    overEl.style.display = "flex";
    return;
  }

  // 4. Self collision — GAME OVER.
  //    (skip the tail because it will move away, UNLESS
  //     we just ate — see step 6 for the nuance)
  for (let i = 1; i < state.snake.length; i++) {
    if (state.snake[i].x === newHead.x && state.snake[i].y === newHead.y) {
      state.running = false;
      overEl.style.display = "flex";
      return;
    }
  }

  // 5. Move the snake:
  //    "Add new head, remove tail" (unless food is eaten).
  state.snake.unshift(newHead);

  // 6. Did we eat the food?
  if (newHead.x === state.food.x && newHead.y === state.food.y) {
    // Score up, show it, spawn fresh food.
    // The tail is NOT removed → snake grows by 1.
    state.score += 10;
    scoreEl.textContent = "TOTAL SCORE: " + state.score;
    spawnFood();
  } else {
    // No food → remove the tail (snake stays same length).
    state.snake.pop();
  }

  // 7. Reset the "one direction change per tick" flag.
  state.directionChangedThisTick = false;
}

// ─── Drawing (called every tick after update) ────────────
function draw() {
  /*
    Canvas is a "bitmap".  Every frame we:
      1. Clear it entirely.
      2. Draw every game object from scratch.

    No more inline styles, no getComputedStyle, no creating
    / removing <div> elements.
  */

  // Clear canvas (black background)
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ─ Draw snake ──────────────────────────────────────
  // Head is a different colour so you can see it easily.
  state.snake.forEach((seg, i) => {
    ctx.fillStyle = i === 0 ? "#66ff66" : "#33aa33";
    ctx.fillRect(
      seg.x * GRID_SIZE,
      seg.y * GRID_SIZE,
      GRID_SIZE - 1,    // -1 leaves a tiny gap between cells
      GRID_SIZE - 1     // so you can see individual segments
    );
  });

  // ─ Draw food ───────────────────────────────────────
  ctx.fillStyle = "#ff4444";
  ctx.fillRect(
    state.food.x * GRID_SIZE,
    state.food.y * GRID_SIZE,
    GRID_SIZE - 1,
    GRID_SIZE - 1
  );
}

// ─── Game loop ──────────────────────────────────────────
function gameLoop() {
  update();
  draw();
}

// ─── Keyboard input ─────────────────────────────────────
/*
  Your original listener was wrapped inside setInterval —
  that re‑attached the listener every 200 ms!  We attach
  it once, directly on the document (like your comment at
  the bottom of the HTML correctly suggested).
*/
document.addEventListener("keydown", (e) => {
  // Only process arrow keys.
  const keyMap = {
    ArrowUp:    { x:  0, y: -1 },
    ArrowDown:  { x:  0, y:  1 },
    ArrowLeft:  { x: -1, y:  0 },
    ArrowRight: { x:  1, y:  0 },
  };
  const dir = keyMap[e.key];
  if (!dir) return;                   // ignore other keys
  e.preventDefault();                 // stop page from scrolling

  // Start the game on first keypress (if not already started).
  if (!state.running) {
    startGame();
    // Also set the initial direction so the snake doesn't
    // always start moving right.
    state.direction     = dir;
    state.nextDirection = dir;
    return;
  }

  // Buffer the direction.  Only one change per tick allowed
  // to prevent overlapping turns.
  if (!state.directionChangedThisTick) {
    state.nextDirection = dir;
    state.directionChangedThisTick = true;
  }
});

// ─── Kick off the interval ──────────────────────────────
/*
  Your original interval was 200 ms — that's fine (5 FPS).
  A 100–150 ms range is more common for Snake.  Feel free
  to tweak.

  requestAnimationFrame would be smoother, but setInterval
  is simpler for a turn‑based grid game like this.
*/
setInterval(gameLoop, 150);
