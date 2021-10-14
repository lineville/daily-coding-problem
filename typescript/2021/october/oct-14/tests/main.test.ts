import { expect } from 'chai'
import { ExpressionTree, evaluate } from '../src/main'

//     *
//    / \
//   +    +
//  / \  / \
// 3  2  4  5

describe('Evaluate Expression tree', () => {
    it('should be 45', () => {
        const root = new ExpressionTree('*')
        const left1 = root.addLeft('+')
        const right1 = root.addRight('+')
        const leaf1 = left1.addLeft(3)
        const leaf2 = left1.addRight(2)
        const leaf3 = right1.addLeft(4)
        const leaf4 = right1.addRight(5)
        expect(evaluate(root)).to.equal(45)
    })

    it('should be 99', () => {
        const root = new ExpressionTree('*')
        const left1 = root.addLeft('+')
        const right1 = root.addRight('+')
        const leaf1 = left1.addLeft(3)
        const left2 = left1.addRight('*')
        const leaf2 = left2.addLeft(2)
        const leaf5 = left2.addRight(4)
        const leaf3 = right1.addLeft(4)
        const leaf4 = right1.addRight(5)
        expect(evaluate(root)).to.equal(99)
    })

    it('should be 15', () => {
        const root = new ExpressionTree('*')
        const left1 = root.addLeft(3)
        const right1 = root.addRight(5)
        expect(evaluate(root)).to.equal(15)
    })

    it('should be 5', () => {
        const root = new ExpressionTree(5)
        expect(evaluate(root)).to.equal(5)
    })
})
