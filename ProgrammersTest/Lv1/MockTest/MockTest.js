function MockTest(answers) {
  const m1 = [1, 2, 3, 4, 5]; // 5
  const m2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  const m3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
  let math1 = 0;
  let math2 = 0;
  let math3 = 0;

  const answer = [];
  for (let i = 0; i < answers.length; i++) {
    // console.log(mathGiver1[i%mathGiver1.length], i%mathGiver1.length)
    if (m1.length < answers.length) m1.push(m1[i]);
    if (m2.length < answers.length) m2.push(m2[i]);
    if (m3.length < answers.length) m3.push(m3[i]);

    if (answers[i] === m1[i]) {
      math1 += 1;
    }
    if (answers[i] === m2[i]) {
      math2 += 1;
    }
    if (answers[i] === m3[i]) {
      math3 += 1;
    }
  }
  let result = Math.max(math1, math2, math3);
  if (result === math1) answer.push(1);
  if (result === math2) answer.push(2);
  if (result === math3) answer.push(3);

  // const mockM1 = answers.filter((m, i) => m === m1[i % m1.length]);
  // const mockM2 = answers.filter((m, i) => m === m2[i % m2.length]);
  // const mockM3 = answers.filter((m, i) => m === m3[i % m3.length]);
  // let maxData = Math.max(mockM1.length, mockM2.length, mockM3.length);
  // console.log(mockM1.length, mockM2.length, mockM3.length, maxData);
  // if(maxData === mockM1.length) answer.push(1)
  // if(maxData === mockM2.length) answer.push(2)
  // if(maxData === mockM3.length) answer.push(3)
  console.log(answer);
  return answer;
}

// MockTest([1, 2, 3, 4, 5]); // [1]
// MockTest([1, 3, 2, 4, 2]);
MockTest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3, 4, 5]); // [1]
