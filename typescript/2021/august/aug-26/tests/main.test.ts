import { expect } from 'chai'
import { areSentencesEquivalent } from '../src/main'

describe('Sentence equivalency', () => {
    it('Should check if two sentences are equivalent or synonymous', () => {
        const synonyms: Set<[string, string]> = new Set([
            ['big', 'large'],
            ['eat', 'consume'],
        ])
        const sent1 = 'He wants to eat food'
        const sent2 = 'He wants to consume food'
        expect(areSentencesEquivalent(synonyms, sent1, sent2)).to.be.true
    })

    it('Should check if two sentences are equivalent or synonymous', () => {
        const synonyms: Set<[string, string]> = new Set([
            ['big', 'large'],
            ['eat', 'consume'],
        ])
        const sent1 = 'She wants to eat food'
        const sent2 = 'He wants to consume food'
        expect(areSentencesEquivalent(synonyms, sent1, sent2)).to.be.false
    })

    it('Should check if two sentences are equivalent or synonymous with transitivity', () => {
        const synonyms: Set<[string, string]> = new Set([
            ['big', 'large'],
            ['large', 'huge'],
            ['huge', 'gigantic'],
        ])
        const sent1 = 'I am big'
        const sent2 = 'I am gigantic'
        expect(areSentencesEquivalent(synonyms, sent1, sent2, true)).to.be.true
    })

    it('Should check if two sentences are equivalent or synonymous with transitivity', () => {
        const synonyms: Set<[string, string]> = new Set([
            ['big', 'large'],
            ['large', 'huge'],
            ['huge', 'gigantic'],
        ])
        const sent1 = 'I am big'
        const sent2 = 'I am gigantic'
        expect(areSentencesEquivalent(synonyms, sent1, sent2, false)).to.be
            .false
    })

    it('Should check if two sentences are equivalent or synonymous with transitivity', () => {
        const synonyms: Set<[string, string]> = new Set([
            ['big', 'large'],
            ['large', 'huge'],
            ['mondo', 'gigantic'],
        ])
        const sent1 = 'I am big'
        const sent2 = 'I am gigantic'
        expect(areSentencesEquivalent(synonyms, sent1, sent2, true)).to.be.false
    })
})
