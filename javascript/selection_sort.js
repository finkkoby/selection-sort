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
  const startTime = Date.now();
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  for (let i = 0; i <= 1000; i++) {
    selectionSort([2,1]);
    selectionSort(longInput);
  }
  const averageTime = (Date.now() - startTime) / 2000;
  console.log(averageTime);
}

module.exports = selectionSort;

/* // Please add your pseudocode to this file
make a new array that holds the answers
create a recursive function that finds the lowest value in an array
  - removes the lowest element, adds to answer array
  - if arr.length > 0, call itself

// And a written explanation of your solution */
/* This one was tricky because I wasn't sure the best way to approach it. I was struggling trying to figure out
if I needed to copy the array as well as create a new one to hold my new array. Finally, I went back to my psuedocode
and I came up with a plan I thought would work. I created a function that calls itself and with each execution, it removes the lowest number
of the array and adds it to the answer array that is defined outside of the function. Each time the function calls itself, it checks to make sure
that the array isn't empty before running again.
 */
