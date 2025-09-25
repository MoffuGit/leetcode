// @leet start
function findWords(board: string[][], words: string[]): string[] {
    let some = new Solution();
    return some.findWords(board, words)
};

// TrieNode Class without 'refs'
class TrieNode {
    children: (TrieNode | null)[];
    wordIdx: number; // Stores the original index from the 'words' array

    constructor() {
        this.children = Array(26).fill(null);
        this.wordIdx = -1; // -1 indicates no word ends here
    }

    /**
     * Adds a word to the Trie.
     * @param {string} word The word to add.
     * @param {number} i The index of the word in the original words array.
     * @return {void}
     */
    addWord(word: string, i: number): void {
        let cur: TrieNode = this;
        for (const char of word) {
            const index = this.getId(char);
            if (cur.children[index] === null) {
                cur.children[index] = new TrieNode();
            }
            cur = cur.children[index]!; // '!' asserts non-null
        }
        cur.wordIdx = i; // Mark this node as the end of a word
    }

    /**
     * Helper to get the 0-25 index for a character.
     * @param {string} c The character.
     * @return {number} The index (0-25).
     */
    private getId(c: string): number {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}

// Solution Class (simpler DFS without advanced pruning)
class Solution {
    private board: string[][];
    private words: string[];
    private ROWS: number;
    private COLS: number;
    private result: string[] = [];
    private trieRoot: TrieNode;

    /**
     * Helper to get the 0-25 index for a character.
     * @param {string} c The character.
     * @return {number} The index (0-25).
     */
    private getId(c: string): number {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    /**
     * Main function to find words on the board.
     * @param {character[][]} board The game board.
     * @param {string[]} words The list of words to find.
     * @return {string[]} A list of found words.
     */
    findWords(board: string[][], words: string[]): string[] {
        this.board = board;
        this.words = words;
        this.ROWS = board.length;
        this.COLS = board[0].length;
        this.result = []; // Reset result

        // Build the Trie
        this.trieRoot = new TrieNode();
        for (let i = 0; i < words.length; i++) {
            this.trieRoot.addWord(words[i], i);
        }

        // Start DFS from every cell on the board
        for (let r = 0; r < this.ROWS; r++) {
            for (let c = 0; c < this.COLS; c++) {
                // Pass the root Trie node to start the search
                this.dfs(r, c, this.trieRoot);
            }
        }

        return this.result;
    }

    /**
     * Performs Depth First Search (DFS) on the board to find words.
     * @param {number} r Current row.
     * @param {number} c Current column.
     * @param {TrieNode} node The current TrieNode being matched.
     * @return {void}
     */
    private dfs(r: number, c: number, node: TrieNode): void {
        // Base case 1: Out of bounds, already visited, or character doesn't lead to a valid Trie path
        if (
            r < 0 ||
            c < 0 ||
            r >= this.ROWS ||
            c >= this.COLS ||
            this.board[r][c] === '*'
        ) {
            return;
        }

        const char = this.board[r][c];
        const charIndex = this.getId(char);

        // Base case 2: Current character does not exist as a child in the current Trie node
        if (node.children[charIndex] === null) {
            return;
        }

        // Move to the next Trie node
        const nextNode = node.children[charIndex]!;

        // 1. Check if a word ends at this nextNode
        if (nextNode.wordIdx !== -1) {
            this.result.push(this.words[nextNode.wordIdx]);
            nextNode.wordIdx = -1; // Invalidate word to prevent duplicates (Crucial!)
        }

        // Mark the board cell as visited for this path
        this.board[r][c] = '*';

        // 2. Explore neighbors
        this.dfs(r + 1, c, nextNode);
        this.dfs(r - 1, c, nextNode);
        this.dfs(r, c + 1, nextNode);
        this.dfs(r, c - 1, nextNode);

        // Backtrack: restore the board cell character
        this.board[r][c] = char;
    }
}

// @leet end
