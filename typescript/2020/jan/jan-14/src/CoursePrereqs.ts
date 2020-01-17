// * Daily Coding Problem Jan 14th 2020

// * [Hard] -- AirBnb

/**
 * * Given a mapping of courseIds to a list of courseIds representing prereqs,
 * * Return an order that these courses can be taken if possible, or null if not possible.
 *
 * ! Ex:
 * * { 'CSC300': ['CSC100', 'CSC200'],
 * *   'CSC200': ['CSC100'],
 * *   'CSC100': [] }
 * * return =>  ['CSC100', 'CSC200', 'CSCS300']
 */

type CourseMapping = { [courseId: string]: Array<string> };

export const validCourseOrder = (
  coursePrereqs: CourseMapping
): Array<string> | null => {
  let result: Array<string> | null = null;

  // * This requires more thinking and backtracking to accomplish complicated scenarios

  return result;
};
