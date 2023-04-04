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

// 1
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 2
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

// 3
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
