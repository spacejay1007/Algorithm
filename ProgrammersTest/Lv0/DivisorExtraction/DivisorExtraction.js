// 약수 구하기

// 내가 한방법
function DivisorExtraction(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
}

// console.log(DivisorExtraction(8));

// 1
function solutionOne(n) {
  console.log(
    Array(n)
      .fill(0)
      .map((v, index) => {
        console.log(v, index, v + index);
      }).reduce(())
  );

  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0).length;
}

console.log(solutionOne(8));

// 2
function solutionTwo(n) {
  let s = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      s.add(i);
      s.add(n / i);
    }
  }

  return [...s].sort((a, b) => a - b);
}

