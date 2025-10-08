// @leet start
function exist(board: string[][], word: string): boolean {
    let WIDTH = board[0].length
    let HEIGHT = board.length

    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            if (search(x, y, 0)) {
                return true
            }
        }
    }

    function search(x: number, y: number, idx: number): boolean {
        if (idx === word.length) {
            return true
        }

        if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT || board[y][x] === "*") {
            return false
        }

        let boardChar = board[y][x]
        let wordChar = word[idx]

        if (boardChar === wordChar) {
            board[y][x] = "*"

            if (
                search(x - 1, y, idx + 1) ||
                search(x + 1, y, idx + 1) ||
                search(x, y - 1, idx + 1) ||
                search(x, y + 1, idx + 1)
            ) {
                return true
            }
            board[y][x] = boardChar
        }

        return false
    }

    return false
};
// @leet end
