export class TicTacToe {

    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
    }

    makeMove(player, row, col) {
        if (this.board[row][col] !== ' ') {
            throw new Error('Space is already occupied');
        }
        if (this.currentPlayer !== player) {
            throw new Error('It is not your turn');
        }
        this.board[row][col] = player;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    isWinner(player) {
        // 🏆
        const winningCombinations = [
            // 🏆
            [[0, 0], [0, 1], [0, 2]], // 🏆
            [[1, 0], [1, 1], [1, 2]], // 🏆
            [[2, 0], [2, 1], [2, 2]], // 🏆
            [[0, 0], [1, 0], [2, 0]], // 🏆
            [[0, 1], [1, 1], [2, 1]], // 🏆
            [[0, 2], [1, 2], [2, 2]], // 🏆
            [[0, 0], [1, 1], [2, 2]], // 🏆
            [[0, 2], [1, 1], [2, 0]]  // 🏆
        ]; // 🏆

        // 🏆
        return winningCombinations.some(combination => 
            // 🏆
            combination.every(([row, col]) => this.board[row][col] === player)
        ); // 🏆
    }

    isDraw() {
        return this.board.every(row => row.every(cell => cell !== ' '));
    }

    getBoard() {
        return this.board
    }
}
