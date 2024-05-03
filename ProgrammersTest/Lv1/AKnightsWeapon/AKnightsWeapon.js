// 기사 단원의 무기

// 내가 작성한 알고리즘 > 시간 초과가 몇개 나옴
function solution(number, limit, power) {
  var answer = 0;
  const att = [];

  for (let i = 1; i <= number; i++) {
    const newArr = Array(i)
      .fill(1)
      .map((v, index) => v + index)
      .filter((f) => i % f === 0).length;
    att.push(newArr);
  }

  const attPlus = att.reduce((acc, curr) => {
    if (curr > limit) return acc + power;
    return acc + curr;
  }, 0);

  return attPlus;
}

// 1
function solution1(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) divisor += 1;
        else divisor += 2;
      }
      if (divisor > limit) {
        divisor = power;
        break;
      }
    }
    answer += divisor;
  }

  return answer;
}

// 2

const sol = (n) => {
  if (n == 1) return 1;

  let ret = 1;

  for (let i = 1; i <= n / 2; i++) if (n % i == 0) ret++;

  return ret;
};

function solution2(number, limit, power) {
  let ans = 0;

  for (let i = 1; i <= number; i++) {
    const cnt = sol(i);
    ans += cnt > limit ? power : cnt;
  }

  return ans;
}

// 3

function solution3(number, limit, power) {
  const sum = (num) => {
    let res = 0;
    for (let i = 1; i * i <= num; i++) {
      if (i * i === num) res++;
      else if (num % i === 0) res += 2;
    }
    return res;
  };
  return Array.from({ length: number }, (el, i) => i + 1)
    .map((el) => (sum(el) > limit ? power : sum(el)))
    .reduce((acc, cur) => acc + cur, 0);
}
