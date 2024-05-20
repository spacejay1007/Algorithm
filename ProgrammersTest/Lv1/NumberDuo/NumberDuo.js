// function NumberDuo(X, Y) {
//   var answer = "";
//   const xArr = X.split("");
//   const yArr = Y.split("");
//   const answerArr = [];
//   for (let i = 0; i < xArr.length; i++) {
//     const yindex = yArr.indexOf(xArr[i]);

//     if (yindex !== -1) {
//       answerArr.push(Number(xArr[i]));
//       yArr.splice(yindex, 1);
//     }
//   }

//   if (answerArr.length === 0) return "-1";
//   if (answerArr.sort((a, b) => b - a)[0] === 0) return "0";

//   return answerArr.sort((a, b) => String(b - a)).join("");
// }
// // 시간 초과...
// NumberDuo("100", "2345"); // "-1"
// NumberDuo("100", "203045"); // "0"
// NumberDuo("12321", "42531"); // "321"

function NumberDuo2(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  for (let i = 0; i < 10; i++) {
    let xCnt = X.filter((x) => Number(x) === i).length; // X 의 반복되는 수가 몇개 인지 확인한다.
    let yCnt = Y.filter((y) => Number(y) === i).length; // Y 의 반복 되는 수가 몇개 인지 확인한다.
    // 0 부터 10 까지 차례대로 돌면서 갯수를 찍어준다.
    answer += i.toString().repeat(Math.min(xCnt, yCnt));
  }

  if (answer === "") return "-1";
  if (answer.split("").sort((a, b) => b - a)[0] === 0) return "0";

  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
// 시간 초과...
NumberDuo2("100", "2345"); // "-1"
NumberDuo2("100", "203045"); // "0"
NumberDuo2("12321", "42531"); // "321"
