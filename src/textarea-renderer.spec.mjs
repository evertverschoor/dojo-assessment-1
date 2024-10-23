import { vi, describe, it, expect, beforeEach } from 'vitest'
import { render } from './textarea-renderer.mjs'

describe('textarea-renderer#render()', () => {
    let ticTacToe

    beforeEach(() => {
        ticTacToe = {
            getBoard: vi.fn()
        }
    })

    it('should set the text content of the htmlElement to the state of the board', () => {
        const htmlElement = document.createElement('textarea')
        
        // Mock the getBoard method to return a predefined board state
        ticTacToe.getBoard = () => [
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ['X', 'O', 'X']
        ]

        render(ticTacToe, htmlElement)

        expect(htmlElement.textContent).toBe(
            'X O X\nO X O\nX O X'
        )
    })

    it('should handle an empty board', () => {
        const htmlElement = document.createElement('textarea')
        
        // Mock the getBoard method to return an empty board state
        ticTacToe.getBoard = () => [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        render(ticTacToe, htmlElement)

        expect(htmlElement.textContent).toBe(
            '  \n  \n  '
        )
    });

    it('should handle a partially filled board', () => {
        const htmlElement = document.createElement('textarea')
        
        // Mock the getBoard method to return a partially filled board state
        ticTacToe.getBoard = () => [
            ['X', '', 'O'],
            ['', 'X', ''],
            ['O', '', 'X']
        ]

        render(ticTacToe, htmlElement)

        expect(htmlElement.textContent).toBe(
            'X  O\n X \nO  X'
        )
    })
})
