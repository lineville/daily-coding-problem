import { expect } from 'chai'
import findLongestPath from '../src/main'

describe('findLongestPath', () => {
  it('should find longest path in file system', () => {
    const result = findLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext") // dir/subdir2/file.ext
    expect(result).to.equal(20)
  })

  it('should find longest path in file system', () => {
    const result = findLongestPath(
      'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
    ) // dir/subdir2/subsubdir2/file2.ext
    expect(result).to.equal(32)
  })
})
