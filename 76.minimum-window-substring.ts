// @leet start
function minWindow(s: string, t: string): string {
    if (t.length > s.length || t === '') {
        return ''
    }

    let tCount = {};
    let window = {};

    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1
    }

    let have = 0;
    let needs = Object.keys(tCount).length
    let res = [-1, -1]
    let resLen = Infinity
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right]
        window[char] = (window[char] || 0) + 1

        if (tCount[char] && tCount[char] === window[char]) {
            have++
        }

        while (have === needs) {
            if (right - left + 1 < resLen) {
                resLen = right - left + 1
                res = [left, right]
            }

            let leftChar = s[left];
            window[leftChar]--
            if (tCount[leftChar] && tCount[leftChar] > window[leftChar]) {
                have--;
            }
            left++
        }
    }
    return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)
};
// @leet end
