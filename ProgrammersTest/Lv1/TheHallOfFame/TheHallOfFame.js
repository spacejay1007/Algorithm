function TheHallOfFame(k, score) {
  const honor = [];
  const answer = [];

  score.forEach((n) => {
    // console.log(n);

    honor.push(n);
    // 내림차순으로 정렬
    honor.sort((a, b) => b - a);
    console.log(honor, "전역");
    // console.log(honor.length);
    if (honor.length >= k) {
      answer.push(honor[k - 1]);
    } else {
      answer.push(honor[honor.length - 1]);
    }
  });

  console.log(honor, answer);
  return answer;
}

TheHallOfFame(3, [10, 100, 20, 150, 1, 100, 200]); // [10, 10, 10, 20, 20, 100, 100]
// TheHallOfFame(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]); //[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
