function WorkoutClothes(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  // console.log(students);

  lost.forEach((item) => (students[item] -= 1));
  reserve.forEach((item) => (students[item] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1] += 1;
      students[i] -= 1;
      // break;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1] += 1;
      students[i] -= 1;
      // break;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (students[i] >= 1) answer += 1;
  }

  return answer;
}

WorkoutClothes(5, [2, 4], [1, 3, 5]);
