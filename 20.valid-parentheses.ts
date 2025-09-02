// @leet start
function isValid(s: string): boolean {
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    let stack: string[] = [];

    for (let char of s) {
        let valid = map.get(char)
        if (valid === undefined) {
            stack.push(char)
            continue;
        }

        let poped = stack.pop();
        if (poped === undefined) {
            return false;
        }

        if (valid !== poped) {
            return false
        }
    }

    return stack.length === 0;
};
// @leet end
