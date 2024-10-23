export function play(designation, ticTacToe) {
    if (ticTacToe.isWinner('X') || ticTacToe.isWinner('O') || ticTacToe.isDraw()) {
        return;
    }

    const board = ticTacToe.getBoard();
    const rows = board.length;
    const cols = board[0].length;

    let moveMade = false;
    while (!moveMade) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        try {
            ticTacToe.makeMove(designation, row, col);
            moveMade = true;
        } catch (error) {
            // Move was invalid, try again
        }
    }
}
