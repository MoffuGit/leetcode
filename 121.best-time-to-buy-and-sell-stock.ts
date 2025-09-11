// @leet start
function maxProfit(prices: number[]): number {
    let res = 0;
    let min = prices[0]

    for (let price of prices) {
        if (price < min) {
            min = price
        } else {
            res = Math.max(res, price - min)
        }
    }
    return res
};
// @leet end
