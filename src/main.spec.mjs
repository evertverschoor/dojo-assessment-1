import { vi, describe, it, expect } from 'vitest'
import { playRound, getCurrentTicTacToe } from './main.mjs'
import { TicTacToe } from './tictactoe.mjs'
import * as consoleRenderer from './console-renderer.mjs'
import * as textareaRenderer from './textarea-renderer.mjs'

describe('main#playRound()', () => {

    let textareaRenderSpy,
        consoleRenderSpy

    beforeAll(() => {
        const ta = document.createElement('textarea')
        ta.setAttribute('id', 'Output')
        document.body.appendChild(ta)
    })

    beforeEach(() => {
        textareaRenderSpy = vi.spyOn(textareaRenderer, 'render')
        consoleRenderSpy = vi.spyOn(consoleRenderer, 'render')
    })

    it('should instantiate TicTacToe and play bot vs bot until the game ends', async () => {
        await playRound(1)

        const ticTacToeInstance = getCurrentTicTacToe()

        expect(ticTacToeInstance).toBeInstanceOf(TicTacToe)
        expect(
            ticTacToeInstance.isWinner('X')
            || ticTacToeInstance.isWinner('O')
            || ticTacToeInstance.isDraw()
        ).toBe(true)
    })

    it('should render the board state after each move using console renderer', async () => {
        await playRound(1)

        const ticTacToeInstance = getCurrentTicTacToe()

        // Check if consoleRender was called after each move
        const moves = ticTacToeInstance.getBoard().flat().filter(cell => cell !== ' ').length
        expect(consoleRenderSpy).toHaveBeenCalledTimes(moves)
    })

    it('should render the board state after each move using textarea renderer', async () => {
        await playRound(1)

        const ticTacToeInstance = getCurrentTicTacToe()

        // Check if textareaRender was called after each move
        const moves = ticTacToeInstance.getBoard().flat().filter(cell => cell !== ' ').length
        expect(textareaRenderSpy).toHaveBeenCalledTimes(moves)
    })

    it('should alternate moves between "x" and "o"', async () => {
        await playRound(1)

        const board = getCurrentTicTacToe().getBoard()

        let xCount = 0
        let oCount = 0

        for (let row of board) {
            for (let cell of row) {
                if (cell === 'X') xCount++
                if (cell === 'O') oCount++
            }
        }

        expect(Math.abs(xCount - oCount)).toBeLessThanOrEqual(1)
    })
})
