export function render(ticTacToe) {
    console.log(ticTacToe.getBoard().map(row => row.join(' ')).join('\n'))
}
