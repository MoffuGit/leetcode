// @leet start
function numIslands(grid: string[][]): number {
    let islands = 0

    let movements: [number, number][] = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    function dfs(row: number, col: number): void {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0") {
            return
        }

        grid[row][col] = "0"
        for (let [rowMove, colMove] of movements) {
            dfs(row + rowMove, col + colMove)
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                islands++;
            }
            dfs(row, col);
        }
    }

    return islands
};
// @leet end
