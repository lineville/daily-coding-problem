// * Daily Coding Problem June 1st 2020

// * [Easy] -- IBM

// * Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same.
// * If this is not possible return null.

// ! Ex: "aaabbc" --> "ababac" (one possible answer)
// ! Ex: "aaab" --> null
import PriorityQueue from "ts-priority-queue";

type Occurrence = { letter: string; occurrences: number };

export const noRepeatedCharacters = (str: string): string | null => {
  let result = "";
  let occurrences = new Map<string, number>();

  // * Calculate occurence of each letter in string and store in map.
  str.split("").forEach((char: string) => {
    occurrences.set(char, (occurrences.get(char) || 0) + 1);
  });

  // * Create a new priority queue and insert all of the occurrences
  const priorityQueue = new PriorityQueue({
    comparator: function (a: Occurrence, b: Occurrence) {
      return b.occurrences - a.occurrences;
    },
  });

  for (const [char, occur] of occurrences.entries()) {
    priorityQueue.queue({ letter: char, occurrences: occur });
  }

  let previous = { letter: "#", occurrences: -1 };
  while (priorityQueue.length) {
    let top = priorityQueue.dequeue();
    result += top.letter;

    if (previous.occurrences > 0) {
      priorityQueue.queue(previous);
    }

    top.occurrences--;
    previous = top;
  }

  if (result.length !== str.length) {
    return null;
  }

  return result;
};
