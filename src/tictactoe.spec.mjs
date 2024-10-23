import { describe, it, expect, beforeEach } from 'vitest'
import { TicTacToe } from './tictactoe.mjs'

describe('tictactoe#TicTacToe', () => {
    let game

    beforeEach(() => {
        game = new TicTacToe()
    })

    it('should initialize an empty board', () => {
        const board = game.getBoard()
        expect(board).toEqual([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ])
    })

    it('should allow a player to make a move', () => {
        game.makeMove('X', 0, 0)
        const board = game.getBoard()
        expect(board[0][0]).toBe('X')
    })

    it('should not allow a move on an occupied space', () => {
        game.makeMove('X', 0, 0)
        expect(() => game.makeMove('O', 0, 0)).toThrow('Space is already occupied')
    })

    it('should detect a winner', () => {
        game.makeMove('X', 0, 0)
        game.makeMove('O', 1, 0)
        game.makeMove('X', 0, 1)
        game.makeMove('O', 2, 0)
        game.makeMove('X', 0, 2)
        expect(game.isWinner('X')).toBe(true)
    })

    it('should detect no winner if no winning condition is met', () => {
        game.makeMove('X', 0, 0)
        game.makeMove('O', 0, 1)
        game.makeMove('X', 0, 2)
        expect(game.isWinner('X')).toBe(false)
    })

    it('should detect a draw', () => {
        game.makeMove('X', 0, 0)
        game.makeMove('O', 0, 1)
        game.makeMove('X', 0, 2)
        game.makeMove('O', 1, 1)
        game.makeMove('X', 1, 0)
        game.makeMove('O', 2, 0)
        game.makeMove('X', 1, 2)
        game.makeMove('O', 2, 2)
        game.makeMove('X', 2, 1)
        expect(game.isDraw()).toBe(true)
    })

    it('should detect if the board is full', () => {
        game.makeMove('X', 0, 0)
        game.makeMove('O', 0, 1)
        game.makeMove('X', 0, 2)
        game.makeMove('O', 1, 1)
        game.makeMove('X', 1, 0)
        game.makeMove('O', 2, 0)
        game.makeMove('X', 1, 2)
        game.makeMove('O', 2, 2)
        game.makeMove('X', 2, 1)
        expect(game.isDraw()).toBe(true)
    })

    it('should detect if there is no draw', () => {
        game.makeMove('X', 0, 0)
        expect(game.isDraw()).toBe(false)
    })

    it('should not allow player X to move twice in a row', () => {
        game.makeMove('X', 0, 0)
        expect(() => game.makeMove('X', 0, 1)).toThrow('It is not your turn')
    })
})
