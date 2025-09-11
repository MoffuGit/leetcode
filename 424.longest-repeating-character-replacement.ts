// @leet start
function characterReplacement(s: string, k: number): number {
    let chars = new Map()
    let res = 0;
    let left = 0;
    let maxChar = 0;

    for (let right = 0; right < s.length; right++) {
        chars.set(s[right], (chars.get(s[right]) || 0) + 1);
        maxChar = Math.max(maxChar, chars.get(s[right]))

        while (right - left + 1 - maxChar > k) {
            chars.set(s[left], chars.get(s[left]) - 1)
            left++;
        }
        res = Math.max(res, right - left + 1)
    }

    return res;
};
// @leet end
