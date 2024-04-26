// 문자열 반복하기
const str = "hello";
const n = 3;

// result = hhheeellllllooo

// 1
function repeatString(str, n) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += str.charAt(i);
    }
  }
  return answer;
}

console.log(repeatString(str, n));

// 2
function repeatStringTwo(str, n) {
  return [...str].map((item) => item.repeat(n)).join("");
  // [...str] > ["h","e","l","l","o"]
  //
}

console.log(repeatStringTwo(str, n));
