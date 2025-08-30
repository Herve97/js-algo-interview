// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1,2,3,4], 2) -- [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) -- [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) -- [[1,2,3], [4,5,6], [7,8]]
// chunk([1,2,3,4,5], 4) -- [[1,2,3,5], [5]]

function chunk(arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
    // console.log("index:", index);
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
