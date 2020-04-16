import {expect} from 'chai'
import { rectangleIntersection } from '../src/RectangleIntersection'

describe('RectangleIntersection', () => {

  it('Should return the intersection of two squares : 6', () => {
    const result = rectangleIntersection({ topLeft: { x: 1, y: 4}, dimensions: { width: 3, height: 3 } }, { topLeft: { x: 0, y: 5}, dimensions: { width: 4, height: 3 } });
    expect(result).to.equal(6);
  })

  
  it('Should return the intersection of two squares : 0', () => {
    const result = rectangleIntersection({ topLeft: { x: 0, y: 0 }, dimensions: { width: 3, height: 3 } }, { topLeft: { x: 0, y: 5}, dimensions: { width: 4, height: 3 } });
    expect(result).to.equal(0);
  })
})