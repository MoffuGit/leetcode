// @leet start
function lengthOfLongestSubstring(s: string): number {
    let map = new Map();

    let left = 0;
    let res = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }

        map.set(s[right], right);
        res = Math.max(res, right - left + 1);
    }

    return res;
};
// @leet end
