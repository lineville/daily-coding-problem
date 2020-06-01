// * Checks if the list of directions create a logically valid map
function validDirections(rules) {
  let isValid = true;
  let map = {};

  // * Do this block for each rule
  rules.forEach(function (rule, index) {
    let [src, dir, dest] = rule.split(" ");

    // * Place the first one at the origin
    if (index === 0) {
      map[src] = { x: 0, y: 0 };
      map[dest] = computeDirection(dir, map[src]);
    } else {
      // * Both locations already on the map
      if (map[src] !== undefined && map[dest] !== undefined) {
        // * Move src if constraint is not already satisfied by the map
        // * After moving it, check all previous rules for validity
        if (!constraintSatisfied(rule, map)) {
          map[src] = computeDirection(invertDir(dir), map[dest]);
          let prevRules = rules.slice(0, index);

          prevRules.forEach(function (rule) {
            if (!constraintSatisfied(rule, map)) {
              isValid = false;
            }
          });
        }
      }

      // * Only src is new, add it relative to dest
      if (map[src] === undefined) {
        map[src] = computeDirection(invertDir(dir), map[dest]);
      }

      // * Only dest is new, add it relative to src
      if (map[dest] === undefined) {
        map[dest] = computeDirection(dir, map[src]);
      }
    }
  });
  return isValid;
}

// * Checks if a given rule is satisfied by the given map
function constraintSatisfied(rule, map) {
  let [src, dir, dest] = rule.split(" ");
  switch (dir) {
    case "N":
      return map[src].y > map[dest].y;
    case "S":
      return map[src].y < map[dest].y;
    case "W":
      return map[src].x < map[dest].x;
    case "E":
      return map[src].x > map[dest].x;
    case "NW":
      return map[src].x < map[dest].x && map[src].y > map[dest].y;
    case "NE":
      return map[src].x > map[dest].x && map[src].y > map[dest].y;
    case "SW":
      return map[src].x < map[dest].x && map[src].y < map[dest].y;
    case "SE":
      return map[src].x > map[dest].x && map[src].y < map[dest].y;
    default:
      throw new Error("Should never get here, received an invalid direction");
  }
}

// * This function could be given
// * Computes a new relative to the source coordinate with respect to direction
function computeDirection(dir, srcCoord) {
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
      throw new Error("Should never get here, received an invalid direction");
  }
}

// * This function could be given
// * Inverts a direction string to its directional oposite
function invertDir(dir) {
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
  }
}
