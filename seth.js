// didn't pass tests, but in sandbox got correct ouput... 

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
