// 햄버거 만들기

function MakingHambergers(ingre) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < ingre.length; i++) {
    stack.push(ingre[i]);

    if (stack.length >= 4) {
      const stackSlice = stack.slice(-4).join(""); // 뒤에서 부터 4개를 잘라서 나타내준다.
      if (stackSlice === "1231") {
        stack.splice(-4); // stack 에서 해당 조건을 삭제 > 1231 의 조건이 맞았을 때
        answer += 1;
      }
    }
  }
  console.log(answer);
}

MakingHambergers([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2;
MakingHambergers([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0;

/**
 * 연속적으로 1231 이 맞아야 한다
 * 예를들면 9번째가 1 이고 1번째부터 3번째까지 231 이 된다고 연속된 숫자가 아니다
 * 1231의 조건이 맞아지면 리스트에서 제외되고 안에 있는 내용으로 다시 1231을 맞춘다 (애니팡 같아...)
 */
