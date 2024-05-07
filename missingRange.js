// 0163
// missing range
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

function missingRange(nums, lower, upper) {
  let result = [];
  if(nums.length === 0) return [[lower, upper]]
  // add the lower range
  if(nums[0] > lower) {
    result.push([lower, nums[0] -1])
  }
  for(let i =0; i<nums.length -1; i++) {
    if(nums[i] + 1 !== nums[i+1]) {
        result.push([nums[i] + 1, nums[i+1] -1])
    }
  }
  if (nums[nums.length - 1] < upper) {
    result.push([nums[nums.length - 1] + 1, upper]);
  }
  return result;
}
// [ 2, 4, 51, 76 ]
// [[2,2],[4,49],[51,74],[76,99]]
// console.log(missingRange([0,1,3,50,75], -2, 99))

function isHappy(n) {
    let seen = new Set();
    seen.add(n);

    while(true) {
        let currenSum = 0;
        while(n >=10) {
            currenSum += Math.pow(n % 10, 2); //　计算个位数的平方和
            n = Math.floor(n / 10); // 向下取整
        }
        currenSum += Math.pow(n, 2) 
        if (currenSum === 1) {
            return true;
          } else if (seen.has(currenSum)) {
            return false;
          }
      
          n = currenSum;
          seen.add(n);
    }
}
// console.log(isHappy(19))


function addString (num1, num2) {
 let arr1 = num1.split('').reverse();
 let arr2 = num2.split('').reverse();

 let result = [];
 let carry  = 0;
 for(let i =0; i<Math.max(num1.length, num2.length); i++) {
    let sum = (parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0)  + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
 }
 if(carry > 0) {
    result.push(carry)
 }
 return result.reverse().join('')
}

// console.log(addString('1223', '555'))

//697. Degree of an Array

// Input: nums = [1,2,2,3,1]
// Output: 2

//思路： 记录每个元素的频率， 最先出现的位置 和最后出现的位置, 根据频率降序 根据数组的长度生序
function findShortestSubArray(nums) {
  let obj = {}
  for (let i = 0; i<nums.length; i++) {
    let char = nums[i];
    obj[char] = (obj[char] || 0) + 1
  }
  console.log(obj, 'obj')
  //最多的出现次数 value 
  let values = Object.values(obj);
  let maxNumber = Math.max(...values);
  // [1,2]
  let keysWithMaxNumber = Object.keys(obj).filter(key => obj[key] === maxNumber);
  let result = [];
  for(let i =0; i<keysWithMaxNumber.length; i++) {
    let indexes = nums.map((num, index) => num == keysWithMaxNumber[i] ? index: -1)
    .filter(index => index !== -1)
    result.push(indexes[indexes.length -1] - indexes[0] + 1)    
  }
  return Math.min(...result)
}
function newfindShortestSubArray (nums) {
  const countMap = {};
  nums.forEach(num => countMap[num] = (countMap[nums] || 0) + 1);
  const maxCount = Math.max(...Object.values(countMap));
  const maxElements = Object.keys(countMap).filter(key => countMap[key] === maxCount);
  const result = maxElements.map(el => {
    const indexes = nums.map((num, index) => num == el ? index : -1).filter(index => index === -1)
    return indexes[indexes.length - 1] - indexes[0] + 1;
  })
  return Math.min(...result);
}
console.log(newfindShortestSubArray([1,2,2,3,1,4,2]));