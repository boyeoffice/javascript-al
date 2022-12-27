// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function range(start, end) {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
}

function solution(number){
  const start = 3;
  const end = number;

  let sum = 0;

  for (num of range(start, end)) {
    if ( num != number && (num % 5 == 0 || num % 3 === 0)) {
      sum += num;
    }
  }
  return sum;
}

console.log(solution(10));
// console.log(range(3, 10));