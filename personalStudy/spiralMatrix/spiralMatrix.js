// 나선형 메트릭스

// m = rows , n = columns

// 문제 접근 방법
// 1. 4곳의 코너 포인터를 각각 변수에 저장 & 초기화
// 2. Top, Left 코너에서 시작, 첫번째 row 왼쪽 > 오른쪽으로 순회, 순회가 끝나면 Top 포인터 + 1 증가
// 3. Right Top 코너에서 시작, 맨 우측 위 > 아래로 순회. 순회 끝나면 Right 포인터 - 1 감소
// 4. Right Bottom 코너에서 시작 맨우측 오른쪽 > 왼쪽으로 순회. 순회 후 Bottom 포인터 - 1 감소
// 5. Lrght 포인터 에서 시작, 왼쪽에서 > 오른쪽으로 순회 Left 포인터 + 1

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 1,2,3,6,9,8,7,4,5
const test2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]; // 1,2,3,4,8,12,11,10,9,5,6,7

const spiralMatrix = (matrix) => {
  const result = []; // output 저장

  let left = 0;
  let right = matrix[0].length - 1; // right 포지션은 맨 위 우측에 있어야 함으로
  let top = 0;
  let bottom = matrix.length - 1; // 맨 아래 있어야 함으로

  // console.log(right, bottom);
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    } // 최상단의 arr 를 순서대로 result 값에 넣어준다.
    top = top + 1;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right = right - 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom = bottom - 1;
    } // 칸 바깥으로 나가지 않게
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left = left + 1;
    }
  }
  return result;
};

console.log(spiralMatrix(test1));
console.log(spiralMatrix(test2));
