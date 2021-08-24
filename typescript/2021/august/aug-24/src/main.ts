// * Daily Coding Problem August 24 2021

// * [Hard] -- LinkedIn

// Given a list of points, a central point, and an integer k, find the nearest k points
// from the central point.

// For example, given the list of points [(0, 0), (5, 4), (3, 1)],
// the central point (1, 2), and k = 2, return [(0, 0), (3, 1)]

// Returns the k nearest points to the center
export const closestPoints = (
    points: [number, number][],
    center: [number, number],
    k: number
): [number, number][] => {
    // Map the points to their distances from the center [x, y, distanceFromCenter]
    const distances = points.map(([x, y]): [number, number, number] => [
        x,
        y,
        distance([x, y], center),
    ])

    // Sort the points by distance from center
    distances.sort((a, b) => a[2] - b[2])

    // Return the k closest points in order of distance from center and give back those points
    return distances.slice(0, k).map(([x, y, _dist]): [number, number] => [x, y])
}

// Computes the distance from the point to the center using distance = delta_x^2 + delta_y^2
const distance = (
    point: [number, number],
    center: [number, number]
): number => {
    const x = point[0] - center[0]
    const y = point[1] - center[1]
    return Math.sqrt(x * x + y * y)
}
