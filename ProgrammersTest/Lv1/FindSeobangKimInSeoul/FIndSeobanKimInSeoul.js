// 서울에서 김서방 찾기

function solution(seoul) {
  let num;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") num = i;
  }

  var answer = `김서방은 ${num}에 있다`;

  return answer;
}

// 1
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log(findKim(["Queen", "Tod", "Kim"]));

// 2
function findKim(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}

//3
const solution = (arr) =>
  `김서방은 ${arr.findIndex((s) => s === "Kim")}에 있다`;

//4
function solution(seoul) {
  let kim1 = seoul.indexOf("Kim");
  var answer = "김서방은 " + `${kim1}` + "에 있다";
  return answer;
}
