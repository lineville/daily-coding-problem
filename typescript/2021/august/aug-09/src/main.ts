// * Daily Coding Problem August 9th 2021

// * [Hard] -- Google

// ## Problem
// Given a string representing a file system find the longest
// (number of characters) absolute path to a file within our file system

export default function findLongestPath(path: string): number {
  const dirsAndFiles = path.split('\n') // Get all the directories and files
  const stack = new Array<number>(dirsAndFiles.length + 1) // Stack to hold the path lengths
  let maxLength = 0 // The length of the longest path so far
  stack[0] = 0 // Initialize stack at 0

  for (const dirOrFile of dirsAndFiles) { // For each director/file
    const level = dirOrFile.lastIndexOf('\t') + 1 // Get the current depth in the file system
    const curLength = stack[level] + dirOrFile.length - level + 1 // Get the current length based on current level and name of directory/file
    stack[level + 1] = curLength // Update the length of the next level

    // If it is a file update longest path, if directory leave maxLength as is
    const isFile = dirOrFile.includes('.')
    maxLength = isFile ? Math.max(maxLength, curLength - 1) : maxLength
  }
  return maxLength
}
