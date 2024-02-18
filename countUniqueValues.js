// implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the arraym there can be negative numbers

// countUniqueValues[(1,1,1,1,1,2)] //2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) //4

function countUniqueValues(arr) {
  let newArr = new Set(arr);
  return newArr.size;
}

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j]
//     }
//   }
//   return i + 1;
// }


console.log(countUniqueValues([-2, -1, -1, 0, 1]))