// @leet start
function solveNQueens(n: number): string[][] {
    let res: string[][] = []
    let board: string[][] = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row: number, col: number): boolean {
        for (let idx = row - 1; idx >= 0; idx--) {
            if (board[idx][col] === 'Q') return false;
        }
        for (let idx = row - 1, j = col - 1; idx >= 0 && j >= 0; idx--, j--) {
            if (board[idx][j] === 'Q') return false;
        }
        for (let idx = row - 1, j = col + 1; idx >= 0 && j < board.length; idx--, j++) {
            if (board[idx][j] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row: number): void {
        if (row === n) {
            res.push(board.map((row) => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = "Q"
                backtrack(row + 1)
                board[row][col] = "."
            }
        }
    }

    backtrack(0)


    return res
};
// @leet end
