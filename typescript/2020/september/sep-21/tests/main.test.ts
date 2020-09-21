import { expect } from 'chai'
import { customReduce } from '../src/main'

describe('Main', () => {
  it('Reduce nums', () => {
    const reducer = (a: number, b: number) => a + b
    expect(customReduce([1, 2, 3], reducer, 0)).to.equal(6)
  })

  it('Reduce strings', () => {
    const reducer = (a: string, b: string) =>
      a.toLowerCase() + '-' + b.toLowerCase()
    expect(customReduce(['Liam', 'Linda', 'Millie'], reducer, '')).to.equal(
      '-liam-linda-millie'
    )
  })

  xit('Reduce arrays', () => {
    const summer = (a: number, b: number) => a + b
    const reducer = (a: Array<number>, b: Array<number>) =>
      customReduce(a, summer, 0) + customReduce(b, summer, 0)
    expect(
      customReduce(
        [[1, 2, 3], [4, 5, 6], [9, 100, 1235, 12], [500]],
        reducer,
        []
      )
    ).to.equal(500)
  })
})
