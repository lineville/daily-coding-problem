// This script is designed to consume a code file that is a solution to
// a daily coding problem, parse out the important information and create
// a new markdown file from template.md
import * as fs from 'fs'

interface MarkdownFileInfo {
  month: string
  date: string
  difficulty: string
  company: string
  language: string
  problemStatement: string
  explanation: string
  solution: string
}

const parseRustFile = (filePath: string): MarkdownFileInfo => {
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const lines = fileContents.split('\n')

  const headerWords = lines[0].split(' ')
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = headerWords.find((w) => months.includes(w))

  const date = headerWords[6]

  const subHeaderWords = lines[2].split(' ')
  const difficulty = subHeaderWords[2].substring(
    1,
    subHeaderWords[2].length - 1
  )
  const company = subHeaderWords[subHeaderWords.length - 1]
  const language = 'rust'

  let problemStatement = ''
  let lineIndex = 4
  let nextLineOfProblemStatement = lines[lineIndex]
  while (nextLineOfProblemStatement[0] === '/') {
    problemStatement += nextLineOfProblemStatement.substring(5)
    lineIndex++
    nextLineOfProblemStatement = lines[lineIndex]
  }

  let explanation = ''

  let solution = '```rust\n'

  while (lineIndex < lines.length) {
    solution += nextLineOfProblemStatement + '\n'
    lineIndex++
    nextLineOfProblemStatement = lines[lineIndex]
  }

  solution += '\n```'

  return {
    month,
    date,
    difficulty,
    company,
    language,
    problemStatement,
    explanation,
    solution,
  }
}

const result = parseRustFile('../rust/2021/feb/feb-03/src/main.rs')
console.log(result)
