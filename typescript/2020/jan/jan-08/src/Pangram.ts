// * Pangram generator
const TrieSearch = require("trie-search");
import fs from "fs";

// * Generates a new pangram from the words in data/scrabble_words.txt
export const generatePangram = (): string => {
  let pangram: string = "";

  let usedLetters: { [s: string]: boolean } = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };

  // * Setup a trie from our list of words form /data/scrabble_words.txt
  let trie = new TrieSearch("name", { min: 0 });
  const words: Array<{ name: string }> = loadWordList().map((word: string) => ({
    name: word,
  }));
  trie.addAll(words);

  // * We now have a trie of all the words in our dictionary
  console.log(trie);

  return pangram;
};

// * Checks if the given word is a word in the trie
const isValidWord = (word: string, trie: any) => {
  const results: Array<{ name: string }> = trie.get(word);
  return (
    results.length > 0 &&
    results.filter((wordObj: { name: string }) => wordObj.name === word)
      .length > 0
  );
};

// * Loads word list from txt file into array of strings
const loadWordList = (): Array<string> => {
  let fileContents = fs.readFileSync(
    __dirname + "/../data/scrabble_words.txt",
    "utf8"
  );
  return fileContents.split("\r\n").map((word) => word.toLowerCase());
};
