// @leet start
function generateParenthesis(n: number): string[] {
    let res = [];
    generate(0, 0, n, res, '');
    return res;
};

function generate(openCount: number, closeCount: number, n: number, res: string[], stack: string) {
    if (openCount === closeCount && openCount === n) {
        res.push(stack);
        return;
    }

    if (openCount < n) {
        generate(openCount + 1, closeCount, n, res, stack + '(');
    }

    if (closeCount < openCount) {
        generate(openCount, closeCount + 1, n, res, stack + ')');
    }
}
// @leet end
