// @leet start
class TimeMap {
    private map: Map<string, [number, string][]>;
    constructor() {
        this.map = new Map()
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }

        this.map.get(key)?.push([timestamp, value])
    }

    get(key: string, timestamp: number): string {
        const values = this.map.get(key) || [];
        let left = 0;
        let right = values.length - 1;
        let result = '';

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @leet end
