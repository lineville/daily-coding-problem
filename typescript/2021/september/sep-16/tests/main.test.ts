import { expect } from 'chai'
import { DailySubscribers, DailySubscribersV2 } from '../src/main'

describe('DailySubscribers', () => {
    it('V1: should track daily subs and be able to query the ranges', () => {
        let subs = new DailySubscribers()
        subs.update(0, 10)
        subs.update(1, 10)
        subs.update(2, 10)
        subs.update(3, 10)
        subs.update(4, 10)
        subs.update(5, 10)
        expect(subs.query(1, 4)).to.equal(40)
    })

    it('V2: should track daily subs and be able to query the ranges', () => {
        let subs = new DailySubscribersV2()
        subs.update(0, 10)
        subs.update(1, 10)
        subs.update(2, 10)
        subs.update(3, 10)
        subs.update(4, 10)
        subs.update(5, 10)
        expect(subs.query(1, 4)).to.equal(40)
    })
})
