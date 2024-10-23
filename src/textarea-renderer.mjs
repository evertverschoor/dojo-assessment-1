export function render(ticTacToe, htmlElement) {
    const board = ticTacToe.getBoard()
    htmlElement.textContent = board.map(row => row.join(' ')).join('\n')
}
