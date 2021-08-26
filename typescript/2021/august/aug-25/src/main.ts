// * Daily Coding Problem August 25 2021

// * [Easy] -- Google

// * A girl is walking along an apple orchard with a bag in each hand. 
// * She likes to pick apples from each tree as she goes along, but is 
// * meticulous about not putting different kinds of apples in the same bag.

// * Given an input describing the types of apples she will pass on her path, in order, 
// * determine the length of the longest portion of her path that consists of just two 
// * types of apple trees.

// ! Ex: [2, 1, 2, 3, 3, 1, 3, 5], the longest portion will involve types 1 and 3, with a length of 4

export const longestTwoAppleStretch = (apples: number[]): number => {
    let lastIndexMap = new Map<number, number>();
    let maxLength = 0;
    let start = 0;

    for (const [apple, index] of apples.entries()) {
        lastIndexMap.set(apple, index);
        if (lastIndexMap.size > 2) {
            if (maxLength < index - start) {
                maxLength = index - start;
            }
            let earliest = 0;
            let min = Number.MIN_VALUE;
            for (const [t, i] of lastIndexMap.entries()) {
                if (i < min) {
                    min = i;
                    earliest = t
                }
            }
            lastIndexMap.delete(earliest);
            start = min + 1;
        }
    }

    if (maxLength < apples.length - start) {
        maxLength = apples.length - start;
    }


    return maxLength

}

	// lastIndex := make(map[int]int, 2)
	// var answer int
	// start := 0
	// for index, appleType := range apples {
	// 	lastIndex[appleType] = index
	// 	if len(lastIndex) > 2 {
	// 		if answer < index-start {
	// 			answer = index - start
	// 		}
	// 		var earliest int
	// 		min := int(^uint(0) >> 1)
	// 		for t, i := range lastIndex {
	// 			if i < min {
	// 				min = i
	// 				earliest = t
	// 			}
	// 		}
	// 		delete(lastIndex, earliest)
	// 		start = min + 1
	// 	}
	// }
	// if answer < len(apples)-start {
	// 	answer = len(apples) - start
	// }
	// return answer

