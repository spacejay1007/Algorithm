function PaintingOver(n, m, section) {
  var answer = 0;
  const arr = new Array(n).fill(true); // 배열의 n 개의 값을 만든다음 true 로 넣어준다.
  section.forEach((item, idx) => (arr[item] = false));
  // section 의 arr 의 번호 값들은 false 로 바꿔준다 > map 이 아니므로 arr 자체를 바꿔버린다.

  for (let i = 0; i < arr.length; i++) {
    // arr 를 하나씩 돌면서 본다
    if (!arr[i]) {
      // arr[i] 가 false 이면 answer 를 counting 을 해주고 m - 1 만큼 뒤로 가준다. 그 앞에 false 는 한번에 페인팅 된다고 생각하면 된다.`
      answer += 1;
      i += m - 1;
    }
  }
  return answer;
}

PaintingOver(8, 4, [2, 3, 6]); // 2
