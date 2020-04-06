// * Daily Coding Problem April 6th 2020

// * [Easy] -- Google

// * You are given a starting state start, a list of transition probabilities for a Markov chain,
// * and a number of steps num_steps. Run the Markov chain starting from start for num_steps
// * and compute the number of times we visited each state.

// ! Ex: transition probabilities: one possibility is this {'a': 3012, 'b': 1656, 'c': 332}
// ! This will not produce same output everytime of course. How do we test and be sure?

// *  [
// *    ('a', 'a', 0.9),
// *    ('a', 'b', 0.075),
// *    ('a', 'c', 0.025),
// *    ('b', 'a', 0.15),
// *    ('b', 'b', 0.8),
// *    ('b', 'c', 0.05),
// *    ('c', 'a', 0.25),
// *    ('c', 'b', 0.25),
// *    ('c', 'c', 0.5)
// *  ]

import Chance from "chance";

type TransitionProbability = {
  start: string;
  end: string;
  probability: number;
};

export const computeMarkovChain = (
  start: string,
  probabilities: Array<TransitionProbability>,
  numSteps: number
): Map<string, number> => {
  let currentState = start;
  let result = new Map<string, number>();
  let chance = new Chance();
  let states = new Set<string>();

  // * Get all possible states
  probabilities.forEach((probability: TransitionProbability) => {
    states.add(probability.start);
  });

  // * Initialize counts of each state to 0
  states.forEach((state: string) => {
    result.set(state, 0);
  });

  for (let i = 0; i < numSteps; i++) {
    let weights = probabilities
      .filter(
        (transition: TransitionProbability) => transition.start === currentState
      )
      .map((transition: TransitionProbability) => transition.probability);
    let newState = chance.weighted(Array.from(states), weights);
    result.set(newState, (result.get(newState) || 0) + 1);
    currentState = newState;
  }

  return result;
};

export const computeMarkovChainRecursive = (
  start: string,
  probabilities: Array<TransitionProbability>,
  numSteps: number
): Map<string, number> => {
  let states = new Set<string>();
  let result = new Map<string, number>();

  // * Get all possible states
  probabilities.forEach((probability: TransitionProbability) => {
    states.add(probability.start);
  });

  // * Initialize counts of each state to 0
  states.forEach((state: string) => {
    result.set(state, 0);
  });

  return computeMarkovChainRecHelper(
    start,
    probabilities,
    numSteps,
    states,
    result
  );
};

const computeMarkovChainRecHelper = (
  currentState: string,
  probabilities: Array<TransitionProbability>,
  stepsRemaining: number,
  states: Set<string>,
  result: Map<string, number>
): Map<string, number> => {
  if (stepsRemaining > 0) {
    let chance = new Chance();
    let weights = probabilities
      .filter(
        (transition: TransitionProbability) => transition.start === currentState
      )
      .map((transition: TransitionProbability) => transition.probability);
    let newState = chance.weighted(Array.from(states), weights);
    return computeMarkovChainRecHelper(
      newState,
      probabilities,
      stepsRemaining - 1,
      states,
      result.set(newState, (result.get(newState) || 0) + 1)
    );
  }

  return result;
};
