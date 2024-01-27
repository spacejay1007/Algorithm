// 과일 장수

/**
 * k : 사과의 최대 점수 - number,
 * m : 한 상자의 들어가는 사과의 개수 - number,
 * score : 사과들의 점수 - number[]
 * return (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) */
function FruitVendor(k, m, score) {
  var answer = 0;
  // 점수가 높은 숫자로 박스 안에 들어가야 함으로 reverse로 정렬
  const scoreSort = score.sort((a, b) => b - a);
  // 박스가 몇개가 나올 수 있는지 확인 > 전체 개수 중에서 / 박스에 담을수 있는 개수 > 소수점은 제외
  let box = Math.floor(score.length / m);
  // 박스 개수 만큼 반복문
  for (let i = 1; box >= i; i++) {
    // (박스에 담긴 최소 값) * m 을 answer에 더한다.
    answer += scoreSort[m * i - 1] * m;
  }
  return answer;
}

console.log(FruitVendor(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(FruitVendor(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
