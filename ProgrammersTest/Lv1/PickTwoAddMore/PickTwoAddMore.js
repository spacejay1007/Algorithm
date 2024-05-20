function PickTwoAddMore(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      // if(answer.indexOf(sum)=== -1) {
      answer.push(sum);

      // }
    }
  }
  const set = [...new Set(answer)];
  // console.log(set.sort((a, b) => a - b));
  console.log(answer);

  return answer;
}

PickTwoAddMore([2, 1, 3, 4, 1]);
