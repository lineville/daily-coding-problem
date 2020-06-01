// Implementation of priority queue to use in problem below
class PriorityQueue {
  constructor({ comparator }) {
    this.comparator = comparator;
    this.items = [];
  }

  // Not super efficient but does the job for simple demo
  enqueue(item) {
    this.items.push(item);
    this.items.sort(this.comparator);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

/*
 * Complete the 'noRepeatedCharacters' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING source as parameter.
 */

function noRepeatedCharacters(source) {
  let result = "";
  let mapOfOccurrences = new Map();

  // * Calculate occurence of each letter in string and store in map.
  source.split("").forEach((char) => {
    mapOfOccurrences.set(
      char,
      mapOfOccurrences.get(char) === undefined
        ? 1
        : mapOfOccurrences.get(char) + 1
    );
  });

  // * Create a new priority queue and insert all of the occurrences
  const priorityQueue = new PriorityQueue({
    comparator: function (a, b) {
      return b.occurrences - a.occurrences;
    },
  });

  for (const [char, occur] of mapOfOccurrences.entries()) {
    priorityQueue.enqueue({ letter: char, occurrences: occur });
  }

  let previous = { letter: "#", occurrences: -1 };
  while (!priorityQueue.isEmpty()) {
    let top = priorityQueue.dequeue();
    result += top.letter;

    if (previous.occurrences > 0) {
      priorityQueue.enqueue(previous);
    }

    top.occurrences--;
    previous = top;
  }

  if (result.length !== source.length) {
    return null;
  }

  return result;
}
