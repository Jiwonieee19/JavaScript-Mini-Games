// ================================================================
//  TIC-TAC-TOE — Professional Implementation
//  Why an array instead of reading element.style.backgroundColor ?
//  Styles return different formats across browsers and "" for
//  unset inline styles.  An array is deterministic & reliable.
// ================================================================

/* ---------- state ---------- */

// board[i] = null | 'blue' | 'red'   (index 0-8, left→right top→bottom)
const board = Array(9).fill(null)

const PLAYERS = ['blue', 'red']
let currentPlayer = 0          // 0 → blue, 1 → red
let gameOver = false
let winner = null

/* ---------- constants ---------- */

// Every winning line as three board indices
// Stored once – no need to hard-code 8 separate if-blocks
const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],             // diagonals
]

/* ---------- DOM refs (cached once) ---------- */

const table = document.querySelector('#table')
const winnerDisplay = document.querySelector('#winner')

/* ---------- init ---------- */

document.addEventListener('DOMContentLoaded', () => {
    // Event delegation – one listener on the parent instead of 9.
    // Works for any number of children, including dynamically added ones.
    // event.target.closest('.column') walks up the tree until it finds
    // an element matching the selector, avoiding clicks on gaps/borders.
    table.addEventListener('click', (event) => {
        const cell = event.target.closest('.column')
        if (!cell) return
        // in this return line, it means nga if ang click isnt in .column, nothing happens

        const index = Number(cell.dataset.index)
        // dataset is the API bridge to all data- attributes
        // (data-index → dataset.index, data-player-name → dataset.playerName).
        // The part after data- is your choice, but the data- prefix is the spec.
        handleCellClick(index, cell)
    })
})

/* ---------- game logic ---------- */

function handleCellClick(index, cellElement) {
    // Guard: ignore clicks when game is over or cell is occupied
    if (gameOver) return
    if (board[index] !== null) return

    const color = PLAYERS[currentPlayer]

    // Update state first, then reflect in the DOM
    // (state is the source of truth – DOM is just a view)
    board[index] = color // state
    cellElement.style.backgroundColor = color // DOM
    // If you ever need to know what's in a cell, you read board[index], 
    // never cellElement.style.backgroundColor. This way your logic doesn't 
    // depend on the DOM (which is slow and inconsistent across browsers).

    // Check for a winner AFTER the move
    const winColor = checkWin()
    if (winColor) {
        gameOver = true
        winner = winColor
        winnerDisplay.style.color = winColor
        console.log(`Winner: ${winColor}`)
        blockUnplayedCells()
        return
    }

    // Check for draw – board.every() runs the callback on every element
    // and returns true ONLY if every element passes the test
    if (board.every(cell => cell !== null)) { // DRAW IF WLA NAG TRUE ANG WIN THEN NO BOX NA
        //  .every() ONLY returns true IF every single element passes
        gameOver = true
        winnerDisplay.textContent = 'DRAW!'
        console.log('Draw')
        return
    }

    // Switch turns (flip between 0 and 1)
    currentPlayer = currentPlayer === 0 ? 1 : 0
}

function checkWin() {
    // Destructuring: [a, b, c] unpacks the 3 indices from each pattern
    for (const [a, b, c] of WIN_PATTERNS) {
        if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
            return board[a]     // returns 'blue' or 'red'
        }
    } // mao daay ni true power ni destructuring
    return null
}

/* ---------- end-of-game UI ---------- */

function blockUnplayedCells() {
    // Grey-out every cell that was never played
    // so the board visually communicates "game over"
    document.querySelectorAll('.column').forEach(cell => {
        const index = Number(cell.dataset.index)
        if (board[index] === null) {
            cell.style.backgroundColor = 'black'
        }
    })
}


// - State array (board[9]) instead of reading inline styles — deterministic across all browsers
// - Event delegation (one listener on #table) instead of 9 individual listeners
// - WIN_PATTERNS constant looped through instead of 8 manual if blocks
// - Draw detection via board.every()
// - gameOver guard prevents clicks after game ends
// - Source-of-truth pattern — state updates first, DOM reflects it second