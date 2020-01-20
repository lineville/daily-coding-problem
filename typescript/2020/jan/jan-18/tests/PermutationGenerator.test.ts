import { expect } from 'chai'
import { permutations } from '../src/PermutationGenerator'

describe('Permutation Generator', function() {
  it('My Permutation: [1, 2, 3]', function() {
    let result: Array<Array<number>> = permutations([1, 2, 3])
    expect(result).deep.equal([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })

  it('My Permutation: [1]', function() {
    let result: Array<Array<number>> = permutations([1])
    expect(result).deep.equal([[1]])
  })

  it('My Permutation: []', function() {
    let result: Array<Array<number>> = permutations([])
    expect(result).deep.equal([])
  })
})
