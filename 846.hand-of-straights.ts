// @leet start
function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize) return false
    let map: Map<number, number> = new Map()

    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1)
    }

    for (let card of hand) {
        let start = card;
        while (map.get(start - 1)) start--
        while (start <= card) {
            while (map.get(start)! > 0) {
                for (let idx = start; idx < start + groupSize; idx++) {
                    if (!map.get(idx)) return false;
                    map.set(idx, map.get(idx)! - 1);
                }
            }

            start++
        }
    }

    return true
};
// @leet end
