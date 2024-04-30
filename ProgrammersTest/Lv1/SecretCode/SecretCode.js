// 둘만의 비밀

// 내가 만든 코드는 이러했다.
function solution(s, skip, index) {
  var answer = "";
  const wordArr = [...s];
  const skipArr = [...skip];
  const alpha = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  // for (let i =0 ; i < alpha.length ; i ++) {
  //     // 알파벳을 돌면서 skip 의 단어를 제거 해준다.
  // }
  const duplicate = alpha.filter((i) => !skipArr.includes(i));

  // s 의 포함되어있는 단어를 index 를 더하여 alpha 의 단어를 추출해내 push 로 담아준다.
  for (let i = 0; i <= wordArr.length; i++) {
    const filtering = duplicate.filter((item, idx) => {
      if (wordArr[i] === item) {
        if (index + idx >= duplicate.length) {
          answer += duplicate[idx + index - duplicate.length];
        } else {
          answer += duplicate[idx + index];
        }
      }
    });
  }

  return answer;
}

//
function solution(s, skip, index) {
  var answer = "";
  // const wordArr = [...s]
  const skipArr = [...skip];
  const alpha = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  // for (let i =0 ; i < alpha.length ; i ++) {
  //     // 알파벳을 돌면서 skip 의 단어를 제거 해준다.
  // }
  const duplicate = alpha.filter((i) => !skipArr.includes(i));
  const returns = s
    .split("")
    .map(
      (item) => duplicate[(duplicate.indexOf(item) + index) % duplicate.length]
    )
    .join("");

  return returns;
}
