// 문자열 내 p와 y의 개수

function solution(s) {
  const confirmString = s.toLowerCase();
  let number = 0;
  for (let i = 0; i < confirmString.length; i++) {
    if (confirmString[i] === "p") number += 1;
    else {
      number -= 1;
    }
  }

  return number === 0 ? true : false;
}
