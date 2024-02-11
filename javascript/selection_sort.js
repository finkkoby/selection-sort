function selectionSort(arr) {
  let answerArray = [];
  function findLowest(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    answerArray.push(min);
    let index = arr.indexOf(min);
    arr.splice(index, 1);
    if (arr.length > 0) {
      findLowest(arr);
    }
  }
  if (arr.length > 0) {
    findLowest(arr);
  }
  return answerArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const startTime = new Date();
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  for (let i = 0; i <= 1000; i++) {
    selectionSort([2,1])
  }
}

module.exports = selectionSort;

/* // Please add your pseudocode to this file
make a new array that holds the answers
create a recursive function that finds the lowest value in an array
  - removes the lowest element, adds to answer array
  - if arr.length > 0, call itself

// And a written explanation of your solution */
