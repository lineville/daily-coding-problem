// * Daily Coding Problem April 9th 2020

// ****************************************************************

// * [Hard] -- Two Sigma

// * Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple
// * probabilistic games.

// * Game 1: roll a die repeatedly. Stop rolling once you get a five followed by a six.
// * Your number of rolls is the amount you pay, in dollars.

// * Game 2: same, except that the stopping condition is a five followed by a five.

// * Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two
// *  games and calculate their expected value.

// ! After testing it appears Alice should play game 1 which on average seems to take ~36 rolls to win
// ! whereas game 2 took on average ~41 rolls to win after 1 million iterations.

// ! Question Why is it 36 vs 41?? What about the two conditions changes the probability?

// * Calculates the average number of rolls expected to win the given @game after playing @iterations many times
export const expectedRollsToWin = (
  iterations: number,
  game: () => Array<number>
): number => {
  let totalSum = 0;
  for (let i = 0; i < iterations; i++) {
    totalSum += game().length;
  }
  return totalSum / iterations;
};

// * Plays the die roll game with the given condition function
export const game = (
  finishingCondition: (previous: number, current: number) => boolean
): Array<number> => {
  let previous = rollDie();
  let current = rollDie();
  let rolls = [previous, current];

  while (!finishingCondition(previous, current)) {
    previous = current;
    current = rollDie();
    rolls.push(current);
  }

  return rolls;
};

// * Calls game with the ending condition 5 -> 6
export const game1 = (): Array<number> =>
  game((previous: number, current: number) => previous === 5 && current === 6);

// * Calls game with the ending condition 5 -> 5
export const game2 = (): Array<number> =>
  game((previous: number, current: number) => previous === 5 && current === 5);

// * Rolls a 6 sided die one time
export const rollDie = (): number => Math.floor(Math.random() * 6 + 1);
