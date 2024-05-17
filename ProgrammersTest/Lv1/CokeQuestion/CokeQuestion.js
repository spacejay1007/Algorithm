function CokeQuestion(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += Math.floor(n / a) * b;

    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}

CokeQuestion(2, 1, 20); // 20
CokeQuestion(3, 1, 20); // 9
