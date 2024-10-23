import { play } from './bot.mjs'
import { TicTacToe } from './tictactoe.mjs'
import { render as consoleRender } from './console-renderer.mjs'
import { render as textareaRender } from './textarea-renderer.mjs'

let ticTacToe,
    interval

export async function playRound(intervalMs = 500) {
    if (interval) {
        clearInterval(interval)
    }
    const textarea = document.getElementById('Output')
    ticTacToe = new TicTacToe()
    let currentPlayer = 'X'

    return new Promise(resolve => {
        interval = setInterval(() => {
            if (ticTacToe.isWinner('X') || ticTacToe.isWinner('O') || ticTacToe.isDraw()) {
                clearInterval(interval)
                resolve()
                return
            }
            play(currentPlayer, ticTacToe)
            textareaRender(ticTacToe, textarea)
            consoleRender(ticTacToe)
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        }, intervalMs);
    })
}

export function getCurrentTicTacToe() {
    return ticTacToe
}

window.playRound = playRound
window.getCurrentTicTacToe = getCurrentTicTacToe
