// * Daily Coding Problem September 12 2021

// * [Medium] -- Twitter

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings,
//  return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

// Simple autocomplete that just filters the list by ones that start with query string
export const autoCompleteOptionsSimple = (
    query: string,
    options: string[]
): string[] => {
    return options.filter((option) => option.startsWith(query))
}

// Autocomplete that uses a trie and traverses through the trie using query string to find options
export const autoCompleteOptionsOptimized = (
    query: string,
    options: string[]
): string[] => {
    let trie = new Trie();
    for (const option of options) {
        trie.insert(option)
    }
    const result = trie.find(query);
    return result;
}

// ['dog', 'deal', 'deer']
//      d
//    /  \
//   o    e
//  /    / \
// g    a   e
//     /     \
//    l       r
class TrieNode {
    key: string | null
    parent: TrieNode | null = null
    children: Map<string, TrieNode>
    endOfWord: boolean = false

    constructor(key: string | null) {
        this.key = key
        this.children = new Map()
    }

    getWord(): string {
        let output = []
        let currentNode: TrieNode | null = this

        while (currentNode) {
            output.unshift(currentNode.key)
            currentNode = currentNode.parent
        }
        return output.join('')
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode(null)
    }

    // inserts a word into the trie.
    insert(word: string): void {
        let node: TrieNode = this.root // we start at the root
        // for every character in the word
        for (let i = 0; i < word.length; i++) {
            // check to see if character node exists in children.
            if (!node.children.has(word[i])) {
                // if it doesn't exist, we then create it.
                node.children.set(word[i], new TrieNode(word[i]))

                // we also assign the parent to the child node.
                let child = node.children.get(word[i])
                if (child) {
                    child.parent = node
                    node.children.set(word[i], child)
                }
            }

            // proceed to the next depth in the trie.
            let nextChild = node.children.get(word[i])
            if (nextChild) {
                node = nextChild
            }

            // finally, we check to see if it's the last word.
            if (i == word.length - 1) {
                // if it is, we set the end flag to true.
                node.endOfWord = true
            }
        }
    }

    // returns every word with given prefix
    find(prefix: string): string[] {
        let node = this.root
        let output = new Array<string>()

        // for every character in the prefix
        for (let i = 0; i < prefix.length; i++) {
            // make sure prefix actually has words
            let nextChild = node.children.get(prefix[i])
            if (nextChild) {
                node = nextChild
            } else {
                // there's none. just return it.
                return output
            }
        }

        // recursively find all words in the node
        findAllWords(node, output)

        return output
    }
}

// recursive function to find all words in the given node.
const findAllWords = (node: TrieNode | undefined, arr: Array<string>) => {
    // base case, if node is at a word, push to output
    if (node && node.endOfWord) {
        arr.unshift(node.getWord())
    }

    // iterate through each children, call recursive findAllWords
    if (node) {
        for (let child in node.children) {
            findAllWords(node.children.get(child), arr)
        }
    }
}
