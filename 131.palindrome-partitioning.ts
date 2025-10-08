// @leet start
function partition(s: string): string[][] {
    let res: string[][] = []
    let curr: string[] = []

    function dfs(left: number): void {
        if (left >= s.length) {
            res.push([...curr])
            return
        }

        for (let right = left; right < s.length; right++) {
            if (isPalindrome(s, left, right)) {
                curr.push(s.substring(left, right + 1))
                dfs(right + 1)
                curr.pop()
            }
        }
    }

    dfs(0)

    return res;
};

function isPalindrome(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }

    return true
}
// @leet end
