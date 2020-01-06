// * Daily Coding Problem Dec 31st 2019

// * [Medium] -- Google

// * Merge k sorted singly linked lists into one sorted linked list

import { LinkedList } from 'linked-list-typescript'

const mergeLinkedLists = (
  lists: Array<LinkedList<number>>
): LinkedList<number> => {
  let mergedList: LinkedList<number> = new LinkedList()

  let completedLists: number = 0

  // * Until we have gone through all the lists
  while (completedLists < lists.length) {
    // * Base case: A list or multiple became empty, so mark another completed
    lists.forEach(list => {
      if (list.length === 0) {
        completedLists++
      }
    })

    // * Get the heads of the lists
    let heads: Array<number> = lists.map(
      (list: LinkedList<number>) => list.head
    )
    console.log(heads)
    // * Get the smallest of the heads, add it to the merged list and remove it
    let smallest: number = Math.min(...heads)
    console.log(smallest)
    let listToRemoveFrom: LinkedList<number> = lists[heads.indexOf(smallest)]
    listToRemoveFrom.removeHead()
    mergedList.append(smallest)
  }

  return mergedList
}

const testMergeLinkedLists = (): void => {
  const list1: LinkedList<number> = new LinkedList(1, 3, 5, 7, 9)
  const list2: LinkedList<number> = new LinkedList(-3, 2, 4, 6, 8)
  const list3: LinkedList<number> = new LinkedList(-9, 0, 6, 10, 12)

  const expectedResult = new LinkedList(
    -9,
    -3,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    8,
    9,
    10,
    12
  )

  const result: LinkedList<number> = mergeLinkedLists([list1, list2, list3])

  let passed: boolean = result.length === expectedResult.length
  for (let i: number = 0; i < result.length; i++) {
    let resVal: number = result.removeHead()
    let expVal: number = expectedResult.removeHead()
    if (expVal !== resVal) {
      passed = false
    }
  }
  console.log(passed ? 'Passed' : 'Failed')
}

testMergeLinkedLists()
