// @leet start
function evalRPN(tokens: string[]): number {
    let stack: number[] = [];


    let operations = new Set(
        [
            '+',
            '-',
            '/',
            '*',
        ]
    );

    for (let token of tokens) {
        if (operations.has(token)) {
            let rgt = stack.pop();
            let lft = stack.pop();

            if (lft === undefined || rgt === undefined) {
                return 0;
            }

            let res = 0;

            switch (token) {
                case '+':
                    res = lft + rgt
                    break;
                case '-':
                    res = lft - rgt
                    break;
                case '/':
                    res = Math.trunc(lft / rgt)
                    break;
                case '*':
                    res = lft * rgt
                    break;
            }

            stack.push(res);
        } else {
            stack.push(parseInt(token))
        }
    }

    let result = stack.pop();

    return result ? result : 0;
};
// @leet end
