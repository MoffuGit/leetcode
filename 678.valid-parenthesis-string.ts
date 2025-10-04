// @leet start
function checkValidString(s: string): boolean {
    let max = 0;
    let min = 0;
    for (let char of s) {
        if (char === '(') {
            max++
            min++
        } else if (char === "*") {
            max++
            min--
        } else {
            max--
            min--
        }

        if (max < 0) {
            return false
        }

        if (min < 0) {
            min = 0
        }
    }

    return !min
};
// @leet end
