// @leet start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    let map: Map<_Node, _Node> = new Map()

    function cloneNode(node: _Node | null): _Node | null {
        if (!node) {
            return node
        }

        if (map.has(node)) {
            return map.get(node)
        }

        let clone = new _Node(node.val);

        map.set(node, clone)

        for (let neighbor of node.neighbors) {
            clone.neighbors.push(cloneNode(neighbor))
        }

        return clone
    }

    return cloneNode(node)
};
// @leet end
