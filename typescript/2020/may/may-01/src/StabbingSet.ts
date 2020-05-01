// * Daily Coding Problem May 1st 2020

// * [Hard] -- Microsoft

/**
 * * Let X be a set of n intervals on the real line.
 * * We say that a set of points P "stabs" X if every interval in X contains at least one point in P.
 * * Compute the smallest set of points that stabs X.
 */

// ! Ex:  [(1, 4), (4, 5), (7, 9), (9, 12)] => (4, 9)

type Interval = { start: number; end: number };

// * Greedy Approach
// *    -- Sort in ascending order of end point
// *    -- Place the first endpoint as the first item in stabbing set
// *    -- Go through rest of intervals, if the current interval contains the last stabbing point, ignore it.
// *    --                             -- Otherwise add that endpoint to the stabbing set.
// *    -- Return the first and last element of our stabbing set.
export const stabbingSet = (intervals: Array<Interval>): Interval => {
  const sortedByEndpoint = intervals.sort((a, b) => a.end - b.end);
  let stabbingSet = [sortedByEndpoint[0].end];

  for (let i = 1; i < sortedByEndpoint.length; i++) {
    if (
      !containsPoint(stabbingSet[stabbingSet.length - 1], sortedByEndpoint[i])
    ) {
      stabbingSet.push(sortedByEndpoint[i].end);
    }
  }

  return { start: stabbingSet[0], end: stabbingSet[stabbingSet.length - 1] };
};

const containsPoint = (point: number, interval: Interval): boolean => {
  return point >= interval.start && point <= interval.end;
};
