// @leet start
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const digitToChar: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'qprs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    let res: string[] = [''];

    for (const digit of digits) {
        const tmp: string[] = [];
        for (const curStr of res) {
            for (const c of digitToChar[digit]) {
                tmp.push(curStr + c);
            }
        }
        res = tmp;
    }
    return res;
};

// @leet end
