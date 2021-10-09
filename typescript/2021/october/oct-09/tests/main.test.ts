import { expect } from 'chai'
import { excelColumnName } from '../src/main'

describe('Excel Column Name', () => {
    it('should return the correct excel column name A, B, ..., AA, BB, ...', () => {
        expect(excelColumnName(1)).to.equal('A')
    })
    it('should return the correct excel column name A, B, ..., AA, BB, ...', () => {
        expect(excelColumnName(2)).to.equal('B')
    })
    it('should return the correct excel column name A, B, ..., AA, BB, ...', () => {
        expect(excelColumnName(27)).to.equal('AA')
    })
    it('should return the correct excel column name A, B, ..., AA, BB, ...', () => {
        expect(excelColumnName(52)).to.equal('AZ')
    })
    it('should return the correct excel column name A, B, ..., AA, BB, ...', () => {
        expect(excelColumnName(53)).to.equal('BA')
    })
    it('should return the correct excel column name A, B, ..., AA, BB, ...', () => {
        expect(excelColumnName(704)).to.equal('AAB')
    })
})
