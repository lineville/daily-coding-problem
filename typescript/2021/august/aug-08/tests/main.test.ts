import { expect } from 'chai'
import { powerset } from '../src/main'

describe('powerset', () => {
  it('should return set of all subsets of the given set', () => {
    let set = [1, 2, 3]
    let expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

    let result = powerset(set)
    expect(result).to.have.deep.members(expected)
  })

  it('should return set of all subsets of the given set', () => {
    let set = [1, 2, 3, 4]
    let expected = [[], [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]

    let result = powerset(set)
    expect(result).to.have.deep.members(expected)
  })
})
