// split an array into 2 equal parts, with left array smaller if necessary
function split(array) {
  const rightChunk = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, -rightChunk);
  const rightArray = array.slice(-rightChunk);
  return { leftArray, rightArray };
}

// actual sorting process
function merge(leftArray, rightArray) {
  let sortedArray = [];
  while (leftArray.length > 0 || rightArray.length > 0) {
    if (rightArray.length === 0 || leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return sortedArray;
}

function mergeSort(unsortedArray) {
  // base case
  if (unsortedArray.length === 1) {
    return [unsortedArray.pop()];
  }

  // split array
  const { leftArray, rightArray } = split(unsortedArray);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  // merge arrays
  return merge(sortedLeftArray, sortedRightArray);
}

const inputArray = [23, 11, 3, 3, 6, 9, 8, 5, 1, 14, 2, 5, 12, 11];
const output = mergeSort(inputArray);
console.log("output", output);
