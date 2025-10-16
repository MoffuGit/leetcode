// @leet start
function pacificAtlantic(heights: number[][]): number[][] {
    let ROWS = heights.length,
        COLS = heights[0].length;
    let pacific: boolean[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    let atlantic: boolean[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

    function dfs(row: number, col: number, ocean: boolean[][]): void {
        ocean[row][col] = true;
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        for (let [rowDirection, colDirection] of directions) {
            let newRow = row + rowDirection,
                newCol = col + colDirection;
            if (
                newRow >= 0 &&
                newRow < ROWS &&
                newCol >= 0 &&
                newCol < COLS &&
                !ocean[newRow][newCol] &&
                heights[newRow][newCol] >= heights[row][col]
            ) {
                dfs(newRow, newCol, ocean);
            }
        }

    }

    for (let col = 0; col < COLS; col++) {
        dfs(0, col, pacific);
        dfs(ROWS - 1, col, atlantic);
    }
    for (let row = 0; row < ROWS; row++) {
        dfs(row, 0, pacific);
        dfs(row, COLS - 1, atlantic);
    }

    let res: [number, number][] = [];
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (pacific[row][col] && atlantic[row][col]) {
                res.push([row, col]);
            }
        }
    }
    return res;
};
// @leet end
