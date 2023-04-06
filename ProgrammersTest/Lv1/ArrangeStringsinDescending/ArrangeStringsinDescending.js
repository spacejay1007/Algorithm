// 문자열 내림차순으로 배치하기

function solution(s) {
  const arrStr = s.split("");
  const sortedArr = arrStr.sort((a, b) => (a < b ? 1 : -1));
  return sortedArr.join("");
}

// 1

function solution(s) {
  return s.split("").sort().reverse().join("");
}

// 2
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}

// 3

function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}
