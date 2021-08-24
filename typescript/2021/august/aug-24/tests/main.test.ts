import { expect } from 'chai'
import { closestPoints } from '../src/main'

describe('K closest points to center', () => {
    it('Should return the k closest points to the center', () => {
        const center: [number, number] = [1, 2]
        const points: [number, number][] = [
            [0, 0],
            [5, 4],
            [3, 1],
        ]
        const k = 2
        expect(closestPoints(points, center, k)).to.deep.equal([
            [0, 0],
            [3, 1],
        ])
    })

    it('Should return the k closest points to the center', () => {
        const center: [number, number] = [1, 2]
        const points: [number, number][] = [
            [0, 0],
            [5, 4],
            [3, 1],
            [90, 5],
        ]
        const k = 3
        expect(closestPoints(points, center, k)).to.deep.equal([
            [0, 0],
            [3, 1],
            [5, 4],
        ])
    })

    it('Should return the k closest points to the center', () => {
        const center: [number, number] = [1, 2]
        const points: [number, number][] = [
            [0, 0],
            [5, 4],
            [3, 1],
            [90, 5],
        ]
        const k = 0
        expect(closestPoints(points, center, k)).to.deep.equal([])
    })
})
