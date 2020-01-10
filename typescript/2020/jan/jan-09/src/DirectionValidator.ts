// * Daily Coding Problem Jan 9th 2020
// * [Hard] -- Uber

/**
 * * A rule is A NE B. -> A is North of B.
 * * Generally: <location> N | S | E | W | NE | NW | SE | SW <location>
 * * We receive a list of these directions, and need to determine
 * * if this map is logically valid
 *
 * ! Ex:
 * * A N B
 * * B NE C
 * * C N A
 *
 * * Not valid because A cannot be north of C and south of C
 *
 * ! Ex:
 * * A NW B
 * * A N B
 *
 * * valid
 */

// * Checks if the list of directions create a logically valid map
export const validDirections = (rules: Array<string>): boolean => {
  let isValid: boolean = true;
  let map: { [s: string]: { x: number; y: number } } = {};

  // * Do this block for each rule
  rules.forEach((rule: string, idx: number) => {
    let [loc1, dir, loc2]: Array<string> = rule.split(" ");

    // * Place the first one at the origin
    if (idx === 0) {
      map[loc1] = { x: 0, y: 0 };
      map[loc2] = computeDirection(dir, map[loc1]);
    } else {
      // * Both locations already on the map
      if (map[loc1] !== undefined && map[loc2] !== undefined) {
        // * Move loc1 if constraint is not already satisfied by the map
        // * After moving it, check all previous rules for validity
        if (!constraintSatisfied(rule, map)) {
          map[loc1] = computeDirection(invertDir(dir), map[loc2]);
          let prevRules: Array<string> = rules.slice(0, idx);
          prevRules.forEach((rule: string) => {
            if (!constraintSatisfied(rule, map)) {
              isValid = false;
            }
          });
        }
      }

      // * Only loc1 is new, add it relative to loc2
      if (map[loc1] === undefined) {
        map[loc1] = computeDirection(invertDir(dir), map[loc2]);
      }

      // * Only loc2 is new, add it relative to loc1
      if (map[loc2] === undefined) {
        map[loc2] = computeDirection(dir, map[loc1]);
      }
    }
  });
  return isValid;
};

// * Checks if a given rule is satisfied by the given map
export const constraintSatisfied = (
  rule: string,
  map: { [s: string]: { x: number; y: number } }
): boolean => {
  const [loc1, dir, loc2]: Array<string> = rule.split(" ");
  switch (dir) {
    case "N":
      return map[loc1].y > map[loc2].y;
    case "S":
      return map[loc1].y < map[loc2].y;
    case "W":
      return map[loc1].x < map[loc2].x;
    case "E":
      return map[loc1].x > map[loc2].x;
    case "NW":
      return map[loc1].x < map[loc2].x && map[loc1].y > map[loc2].y;
    case "NE":
      return map[loc1].x > map[loc2].x && map[loc1].y > map[loc2].y;
    case "SW":
      return map[loc1].x < map[loc2].x && map[loc1].y < map[loc2].y;
    case "SE":
      return map[loc1].x > map[loc2].x && map[loc1].y < map[loc2].y;
    default:
      throw new Error("Bad direction");
  }
};

// * Computes a new relative to the source coordinate with respect to direction
export const computeDirection = (
  dir: string,
  srcCoord: { x: number; y: number }
): { x: number; y: number } => {
  switch (dir) {
    case "N":
      return { x: srcCoord.x + 0, y: srcCoord.y - 1 };
    case "S":
      return { x: srcCoord.x + 0, y: srcCoord.y + 1 };
    case "E":
      return { x: srcCoord.x - 1, y: srcCoord.y + 0 };
    case "W":
      return { x: srcCoord.x + 1, y: srcCoord.y + 0 };
    case "NE":
      return { x: srcCoord.x - 1, y: srcCoord.y - 1 };
    case "NW":
      return { x: srcCoord.x + 1, y: srcCoord.y - 1 };
    case "SE":
      return { x: srcCoord.x - 1, y: srcCoord.y + 1 };
    case "SW":
      return { x: srcCoord.x + 1, y: srcCoord.y + 1 };
    default:
      throw new Error("Bad direction");
  }
};

// * Inverts a direction string to its directional oposite
export const invertDir = (dir: string): string => {
  switch (dir) {
    case "N":
      return "S";
    case "S":
      return "N";
    case "E":
      return "W";
    case "W":
      return "E";
    case "NE":
      return "SW";
    case "NW":
      return "SE";
    case "SE":
      return "NW";
    case "SW":
      return "NE";
    default:
      throw new Error("Bad direction");
  }
};
