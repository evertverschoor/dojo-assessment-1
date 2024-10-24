import { describe, it, expect, vi } from 'vitest'
import { play } from './bot.mjs'

describe('bot#play()', () => {
    let ticTacToe

    beforeEach(() => {
        ticTacToe = {
            isWinner: vi.fn(),
            isDraw: vi.fn(),
            makeMove: vi.fn(),
            getBoard: vi.fn(() => [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ])
        }
    })

    it('should do nothing if there is a winner', () => {
        vi.spyOn(ticTacToe, 'isWinner').mockReturnValue(true)
        const makeMoveSpy = vi.spyOn(ticTacToe, 'makeMove')

        play('O', ticTacToe)

        expect(makeMoveSpy).not.toHaveBeenCalled()
    })

    it('should do nothing if there is a draw', () => {
        vi.spyOn(ticTacToe, 'isDraw').mockReturnValue(true)
        const makeMoveSpy = vi.spyOn(ticTacToe, 'makeMove')

        play('X', ticTacToe)

        expect(makeMoveSpy).not.toHaveBeenCalled()
    })

    it('should make a move if the board is not full and there is no winner or draw', () => {
        vi.spyOn(ticTacToe, 'isWinner').mockReturnValue(false)
        vi.spyOn(ticTacToe, 'isDraw').mockReturnValue(false)
        const makeMoveSpy = vi.spyOn(ticTacToe, 'makeMove')

        play('X', ticTacToe)

        expect(makeMoveSpy).toHaveBeenCalled()
    })

    it('should retry if an error is thrown when making a move', () => {
        vi.spyOn(ticTacToe, 'isWinner').mockReturnValue(false)
        vi.spyOn(ticTacToe, 'isDraw').mockReturnValue(false)

        let firstCall = true
        const makeMoveSpy = vi.spyOn(ticTacToe, 'makeMove').mockImplementation(() => {
            if (firstCall) {
                firstCall = false
                throw new Error('Space is already occupied')
            }
        })

        expect(() => play('O', ticTacToe)).not.toThrow()
        expect(makeMoveSpy).toHaveBeenCalledTimes(2)
    })
})
