// @leet start
function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    function isAlphanumeric(char: string) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }


    while (left < right) {
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();
        if (!isAlphanumeric(leftChar)) {
            left++;
            continue;
        }

        if (!isAlphanumeric(rightChar)) {
            right--;
            continue;
        }

        if (leftChar !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
// @leet end
