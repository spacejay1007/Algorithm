// Progrrammers > 나머지가 1이 되는 수 찾기

const t = 10;

const FindTheNumberOne = (t) => {
  // console.log(t);
  // let num = 0;

  let numArr = [];
  for (let i = 0; i <= t; i++) {
    if (t % i === 1) {
      // console.log(i);
      numArr.push(i);
      // return (num = i);
    }
  }
  console.log(numArr[0]);
};
FindTheNumberOne(t);
