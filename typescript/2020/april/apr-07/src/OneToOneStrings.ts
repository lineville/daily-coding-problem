// * Daily Coding Problem April 7th 2020

// ********************************************

// * [Easy] -- Bloomberg

// * Determine whether there exists a one-to-one character mapping from one string to another
// * In other words, given 2 strings check that no character in the input set maps to two different characters in the output set

// ! Ex: areOneToOne('abc', 'bcd') => true. (a -> b, b -> c, c -> d)
// ! Ex: areOneToOne('foo', 'bar') => false. (f -> b, o -> a, o -> r) 2 mappings for 'o' exist.

export const areOneToOne = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) {
    return false;
  }

  let mapping = new Map<string, string>();

  for (let i = 0; i < s1.length; i++) {
    if (mapping.has(s1[i]) && mapping.get(s1[i]) !== s2[i]) {
      return false;
    }
    mapping.set(s1[i], s2[i]);
  }

  return true;
};
