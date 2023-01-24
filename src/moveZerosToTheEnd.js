// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.f

function moveZeros(arr) {
  let newArr = [];
  let zeroArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return [...newArr, ...zeroArr]
}

// Solution 2
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));