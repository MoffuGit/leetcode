// @leet start
function carFleet(target: number, position: number[], speed: number[]): number {
    let cars = position.map((p, i) => [p, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);

    let fleets: number[] = [];

    for (let [pos, speed] of cars) {
        fleets.push((target - pos) / speed);
        if (
            fleets.length >= 2 &&
            fleets[fleets.length - 1] <= fleets[fleets.length - 2]
        ) {
            fleets.pop()
        }
    }
    return fleets.length
};
// @leet end
