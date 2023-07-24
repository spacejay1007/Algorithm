// Programmers > 부족한 금액 계산하기

const price = 3;
const money = 20;
const count = 4;

const Calculate = (price, money, count) => {
  let answer = -1;
  let total = 0;
  const arr = [];
  for (let i = 0; i < count; i++) {
    total = total + price;
    arr.push(total);
  }
  console.log(arr.reduce((a, b) => a + b) - money);
  return arr.reduce((a, b) => a + b) - money;
};

Calculate(price, money, count);
