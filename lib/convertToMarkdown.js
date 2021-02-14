"use strict";
exports.__esModule = true;
// This script is designed to consume a code file that is a solution to
// a daily coding problem, parse out the important information and create
// a new markdown file from template.md
var fs = require("fs");
var parseRustFile = function (filePath) {
    var fileContents = fs.readFileSync(filePath, 'utf8');
    var lines = fileContents.split('\n');
    var headerWords = lines[0].split(' ');
    var months = [
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
    ];
    var month = headerWords.find(function (w) { return months.includes(w); });
    var date = headerWords[6];
    var subHeaderWords = lines[2].split(' ');
    var difficulty = subHeaderWords[2].substring(1, subHeaderWords[2].length - 1);
    var company = subHeaderWords[subHeaderWords.length - 1];
    var language = 'rust';
    var problemStatement = '';
    var lineIndex = 4;
    var nextLineOfProblemStatement = lines[lineIndex];
    while (nextLineOfProblemStatement[0] === '/') {
        problemStatement += nextLineOfProblemStatement.substring(5);
        lineIndex++;
        nextLineOfProblemStatement = lines[lineIndex];
    }
    var explanation = '';
    var solution = '```rust\n';
    while (lineIndex < lines.length) {
        solution += nextLineOfProblemStatement + '\n';
        lineIndex++;
        nextLineOfProblemStatement = lines[lineIndex];
    }
    solution += '\n```';
    return {
        month: month,
        date: date,
        difficulty: difficulty,
        company: company,
        language: language,
        problemStatement: problemStatement,
        explanation: explanation,
        solution: solution
    };
};
var result = parseRustFile('../rust/2021/feb/feb-03/src/main.rs');
console.log(result);
