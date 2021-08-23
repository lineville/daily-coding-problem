// * Daily Coding Problem August 23 2021

// * [Easy] -- Google

// You are given an array of arrays of integers, where each array corresponds
// to a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]]
// represents the triangle:

//   1
//  2 3
// 1 5 1
// We define a path in the triangle to start at the top and go down one row
// at a time to an adjacent value, eventually ending with an entry on the bottom row.
//  For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

// Write a program that returns the weight of the maximum weight path.

export const maxWeight = (triangle: number[][], helperFn: (triangle: number[][]) => number): number => {
    let triangleCopy = JSON.parse(JSON.stringify(triangle)) // Deep copy the triangle
    return helperFn(triangleCopy)
}

export const maxWeightHelperIter = (triangle: number[][]): number => {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
			const left = triangle[i + 1][j]
			const right = triangle[i + 1][j + 1]
			triangle[i][j] += Math.max(left, right)
        }
    }

    return triangle[0][0]
}

export const maxWeightHelperRec = (triangle: number[][]): number => {
	if (triangle.length === 1) {
		return triangle[0][0]
	} else {
		const lastRow = triangle[triangle.length - 1]
		const penultimateRow = triangle[triangle.length - 2]
		for (let i = 0; i < penultimateRow.length; i++) {
			penultimateRow[i] += Math.max(lastRow[i], lastRow[i + 1])
		}
		triangle.pop()
		return maxWeightHelperRec(triangle)
	}
}