// 햄버거 만들기

function MakingHambergers(ingre) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < ingre.length; i++) {
    stack.push(ingre[i]);

    if (stack.length >= 4) {
      const stackSlice = stack.slice(-4).join(""); // 뒤에서 부터 4개를 잘라서 나타내준다.
      if (stackSlice === "1231") {
        stack.splice(-4); // stack 에서 해당 조건을 삭제
        answer += 1;
      }
    }
  }
  console.log(answer);
}

MakingHambergers([2, 1, 1, 2, 3, 1, 2, 3, 1]);
MakingHambergers([1, 3, 2, 1, 2, 1, 3, 1, 2]);
