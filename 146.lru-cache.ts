// @leet start
class LRUCache {
    capacity: number
    cache: Map<number, _Node>
    head: _Node
    tail: _Node

    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
        this.head = new _Node(0, 0)
        this.tail = new _Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key: number): number {
        const node = this.cache.get(key)
        if (node) {
            this.remove(node);
            this.insert(node);
            return node.value;
        }

        return -1
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key)
        if (node) {
            this.remove(node);
        }
        const newNode = new _Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.head.next;
            if (lru) {

                this.remove(lru);
                this.cache.delete(lru.key);
            }
        }
    }

    remove(node: _Node): void {
        const prev = node.prev
        const next = node.next
        if (prev) {
            prev.next = next
        }
        if (next) {
            next.prev = prev
        }
    }

    insert(node: _Node): void {
        const prev = this.tail.prev
        if (prev) {
            prev.next = node
        }
        node.prev = prev
        node.next = this.tail
        this.tail.prev = node
    }
}

class _Node {
    value: number
    key: number
    next: _Node | null
    prev: _Node | null

    constructor(key: number, value: number) {
        this.value = value
        this.key = key
        this.next = null
        this.prev = null
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @leet end
