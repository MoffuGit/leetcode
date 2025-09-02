// @leet start
function groupAnagrams(strs: string[]): string[][] {
    const res = {};
    for (let s of strs) {
        const sortedS = s.split('').sort().join('');
        if (!res[sortedS]) {
            res[sortedS] = [];
        }
        res[sortedS].push(s);
    }
    return Object.values(res);
};
// @leet end
