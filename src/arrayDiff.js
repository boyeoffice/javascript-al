function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val));
}

function arrayDiff2(a, b) {
  const arrMerged = [...a, ...b];
  const arr = [];

  for (var num of arrMerged) {
    if (!b.includes(num)) {
      arr.push(num);
    }
  }

  return arr;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])) //[1,3];
console.log(arrayDiff2([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff2([1,2,3],[1,2])); // [3]
console.log(arrayDiff2([],[1,2])); // []



