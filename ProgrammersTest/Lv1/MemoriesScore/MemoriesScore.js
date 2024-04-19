// 기억 점수

function solution(name, yearning, photo) {
  var answer = [];
  const memoryObj = {};
  name.map((item, index) => (memoryObj[name[index]] = yearning[index]));

  const newAsw = photo.map((item) =>
    // acc는 init 값으로 시작하고 누적해놨다가 다음 조건이 맞으면 다음 값을 더해준다.
    item.reduce((acc, cur) => acc + (memoryObj[cur] || 0), 0)
  );
  return newAsw;
}
