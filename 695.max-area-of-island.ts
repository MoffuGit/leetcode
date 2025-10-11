// @leet start
function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;

    const movements: [number, number][] = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0],
    ]

    function dfs(row: number, col: number): number {

        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === 0) {
            return 0
        }

        grid[row][col] = 0
        let count = 1

        for (let [rowMove, colMove] of movements) {
            count += dfs(row + rowMove, col + colMove)
        }

        return count

    }

    for (let row = 0; row < grid.length; row++) {

        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col]) {
                max = Math.max(max, dfs(row, col))
            }
        }
    }


    return max
};
// @leet end
