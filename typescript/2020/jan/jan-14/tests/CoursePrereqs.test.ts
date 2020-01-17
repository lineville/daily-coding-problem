import { validCourseOrder } from './../src/CoursePrereqs';
import { expect } from 'chai';

describe('Course Ordering', function() {
  it('Valid ordering', function() {
    let result = validCourseOrder({
        'CS300': ['CS100', 'CS200'],
        'CS200': ['CS100'],
        'CS100': []
    })
    expect(result).deep.equal(['CS100', 'CS200', 'CS300']);
  });

  it('Impossible ordering', function() {
    let result = validCourseOrder({
        'CS300': ['CS100', 'CS200'],
        'CS200': ['CS100'],
        'CS100': ['CS300']
    })
    expect(result).to.be.null;
  });

  // * More thorough tests needed
});
