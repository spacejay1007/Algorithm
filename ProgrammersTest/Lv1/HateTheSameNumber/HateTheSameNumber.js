// Progrrammers > 같은 숫자는 싫어

function solution(arr) {
  var answer = [];

  for (let i = 1; i < arr.length; i++) {
    if (i === 1) answer.push(arr[0]);
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  console.log(answer);

  return answer;
}

// 다른 사람 풀이 1

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

// 다른 사람 풀이 2

function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 다른 사람 풀이 3

function solution(arr) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      continue; // 같은 부분을 continue 를 넣은 점이 나랑 다르다.
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}
