// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Solution 1
function descendingOrder(n){
  const num = n.toString().split('').sort().reverse().join('');
  return parseInt(num);
}

// Solution 2
function descendingOrder2(n) {
  const arr = Array.from(n.toString());
  arr.sort((a, b) => b - a);
  return parseInt(arr.join(''));
}

console.log(descendingOrder2(7467390238))

module.exports = { descendingOrder }