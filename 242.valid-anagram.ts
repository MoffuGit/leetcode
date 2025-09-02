// @leet start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let count = new Array(26).fill(0);
    for (let idx = 0; idx < s.length; idx++) {
        count[s.charCodeAt(idx) - 'a'.charCodeAt(0)]++;
        count[t.charCodeAt(idx) - 'a'.charCodeAt(0)]--;
    }

    return count.every((val) => val === 0)
};
// @leet end
