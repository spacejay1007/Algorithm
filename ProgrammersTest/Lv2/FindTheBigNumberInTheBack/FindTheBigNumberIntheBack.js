function FindTheBigNumberIntheBack(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = -1;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        num = numbers[j];
        break;
      }
    }
    answer.push(num);
  }

  return answer;
}

FindTheBigNumberIntheBack([2, 3, 3, 5]); // [3,5,5,-1]

function solution(numbers) {
  var answer = [];

  // for(let i = 0; )
  return answer;
}

solution([2, 3, 3, 5]);
