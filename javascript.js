"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'aPlusB' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function aPlusB(lines) {
  console.log(lines);
  debugger;

  let listOfIntegers = lines.map(function (x) {
    // Split
    let splitElement = x.split(" "); // ["5", "5"]
    // Convert to Integer
    let integerList = [];
    for (let i = 0; i < splitElement.length; i++) {
      integerList.push(parseInt(splitElement[i]));
    }
    return integerList;
  }); // [[5,5], [1, 1]]

  // Added Integers
  let addedListOfIntegers = listOfIntegers.flatMap(function (x) {
    let elementSum = x.reduce((a, b) => a + b, 0);
    return elementSum;
  }); // [10, 2, 12]

  // Return the Array
  let stringListOfIntegers = addedListOfIntegers.map(function (x) {
    return x.toString();
  });
  debugger;
  return stringListOfIntegers;
}

function main() {
  const ws = process.stdout;

  const linesCount = parseInt(readLine().trim(), 10);

  let lines = [];

  for (let i = 0; i < linesCount; i++) {
    const line = readLine();
    lines.push(line);
  }

  const result = aPlusB(lines);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
