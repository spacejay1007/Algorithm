// 기사 단원의 무기

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
