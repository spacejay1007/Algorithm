// 수박수박수박수?

function solution(n) {
  let num = 1;
  const arr = [];
  while (num <= n) {
    if (num % 2 !== 0) arr.push("수");
    if (num % 2 === 0) arr.push("박");
    num++;
  }
  return arr.join("");
}

// 1
function waterMelon(n) {
  var result =
    "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";
  //함수를 완성하세요

  return result.substring(0, n);
}

// 2
var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");

// 3
const waterMelon = (n) => "수박".repeat(n).slice(0, n);

// 4  -> n === 1 이면 작동 안함
function waterMelon(n) {
  var result = "수박";
  result = result.repeat(n - 1).substring(0, n);
  //함수를 완성하세요

  return result;
}

// 5
function waterMelon(n) {
  // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
}

// 6
function waterMelon(n) {
  var result = "";
  //함수를 완성하세요
  for (var i = 0; i < n; i++) {
    result += i % 2 == 0 ? "수" : "박";
  }
  return result;
}

// 7
function waterMelon(n) {
  var result = "";
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      result += "수";
    } else {
      result += "박";
    }
  }

  return result;
}
