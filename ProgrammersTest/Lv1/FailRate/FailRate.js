function FailRate(N, stages) {
  let answer = [];
  let number = stages.length;
  const fails = {};

  for (let i = 1; i <= N; i++) {
    const fil = stages.filter((item) => item === i).length;
    fails[i] = fil / number;
    number -= fil;
  }
  // 객체를 entries를 활용해서 배열로 바꿔준다.
  const sortable = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  sortable.forEach((item) => answer.push(Number(item[0])));

  return answer;
}

FailRate(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3,4,2,1,5]
FailRate(4, [4, 4, 4, 4, 4]); // [4,1,2,3]

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
