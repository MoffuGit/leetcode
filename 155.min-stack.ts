// @leet start
class MinStack {
    stack: number[];
    min: number;

    constructor() {
        this.stack = [];
        this.min = Infinity
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    pop(): void {
        const pop = this.stack.pop();
        if (pop === undefined) {
            return
        }
        if (pop < 0) this.min -= pop;
    }

    top(): number {
        const top = this.stack[this.stack.length - 1];
        return top > 0 ? top + this.min : this.min;
    }

    getMin(): number {
        return this.min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @leet end
