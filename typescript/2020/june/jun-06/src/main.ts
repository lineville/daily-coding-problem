// * Daily Coding Problem June 6th 2020

// * You are given a list of N points (x1, y1), (x2, y2), ..., (xN, yN) representing a polygon.
// * You can assume these points are given in order; that is, you can construct the polygon by
// * connecting point 1 to point 2, point 2 to point 3, and so on, finally looping around to connect
// * point N to point 1.

// * Determine if a new point p lies inside this polygon. (If p is on the boundary of the polygon, you should return False).

export type Point = { x: number; y: number }

export const insidePolygon = (polygon: Array<Point>, point: Point): boolean => {
  polygon.push(polygon[0]) // Connect it back to 1st point
  let intersections = new Map()

  for (let i = 1; i < polygon.length; i++) {
    let [low, high] = polygon.slice(i - 1, i + 1)
    if (low.y > high.y) {
      low = high
      high = low
    }

    if (low.y === high.y || point.y < low.y || point.y > high.y) {
      continue
    }

    if (low.x === high.x) {
      if (point.x === low.x && point.y >= low.y && point.y <= high.y) {
        return false
      } else if (point.x < low.x && point.y >= low.y && point.y <= high.y) {
        // intersections
      }
      continue
    }

    let slope = high.y - low.y / high.x - low.x
    let b = low.y - slope * low.x
    let xAtY = point.y - b / slope
    if (point.x === xAtY) {
      return false
    } else if (point.x < xAtY) {
      // intersections
    }
  }

  return false
}
