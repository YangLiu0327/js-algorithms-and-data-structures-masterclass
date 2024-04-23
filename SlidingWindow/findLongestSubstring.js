// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str) {
  // 初始化最长子串长度为0，起始指针为0，字符索引映射对象
  let longestSubstringLength = 0;
  let start = 0;
  let charIndexMap = {};

  // 遍历字符串
  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    // 如果字符重复且其上一次出现的位置在当前子串内
    if (charIndexMap[char] >= start) {
      // 更新起始指针为重复字符的下一个位置
      start = charIndexMap[char] + 1;
    }

    // 更新字符索引映射
    charIndexMap[char] = end;

    // 计算当前子串长度，并更新最长子串长度
    longestSubstringLength = Math.max(longestSubstringLength, end - start + 1);
  }

  return longestSubstringLength;
}

// 例子
console.log(findLongestSubstring(''));                // 输出: 0
console.log(findLongestSubstring('rithmschool'));     // 输出: 7
console.log(findLongestSubstring('thisisawesome'));   // 输出: 6
console.log(findLongestSubstring('thecatinthehat'));  // 输出: 7
console.log(findLongestSubstring('bbbbbb'));           // 输出: 1
console.log(findLongestSubstring('longestsubstring'));// 输出: 8
console.log(findLongestSubstring('thisishowwedoit')); // 输出: 6

