import { describe, it, expect } from 'vitest'
import { playRound } from './main.mjs'
import TicTacToe from './tictactoe.mjs'
import { render as consoleRender } from './console-renderer.mjs'
import { render as textareaRender } from './textarea-renderer.mjs'

describe('main#playRound()', () => {

    it('should instantiate TicTacToe and play bot vs bot until the game ends', () => {
        playRound()

        // Assuming getCurrentTicTacToe returns the current game instance
        const ticTacToeInstance = window.getCurrentTicTacToe()

        expect(ticTacToeInstance).toBeInstanceOf(TicTacToe)
        expect(
            ticTacToeInstance.isBoardFull()
            || ticTacToeInstance.isWinner('x')
            || ticTacToeInstance.isWinner('o')
            || ticTacToeInstance.isDraw()
        ).toBe(true)
    })

    it('should render the board state after each move using console renderer', () => {
        playRound()

        const ticTacToeInstance = window.getCurrentTicTacToe()

        // Check if consoleRender was called after each move
        const moves = ticTacToeInstance.getBoard().flat().filter(cell => cell !== '').length
        expect(consoleRender).toHaveBeenCalledTimes(moves)
    })

    it('should render the board state after each move using textarea renderer', () => {
        playRound()

        const ticTacToeInstance = window.getCurrentTicTacToe()

        // Check if textareaRender was called after each move
        const moves = ticTacToeInstance.getBoard().flat().filter(cell => cell !== '').length
        expect(textareaRender).toHaveBeenCalledTimes(moves)
    })

    it('should alternate moves between "x" and "o"', () => {
        playRound()

        const board = window.getCurrentTicTacToe().getBoard()

        let xCount = 0
        let oCount = 0

        for (let row of board) {
            for (let cell of row) {
                if (cell === 'x') xCount++
                if (cell === 'o') oCount++
            }
        }

        expect(Math.abs(xCount - oCount)).toBeLessThanOrEqual(1)
    })
})
