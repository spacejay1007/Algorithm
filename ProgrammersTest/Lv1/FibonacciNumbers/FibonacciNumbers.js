function fibo(num) {
  let fiboNum = 0;
  let lastFiboNum = 1;
  let beforeLastNum = 0;
  for (let i = 0; i < num; i++) {
    fiboNum = lastFiboNum + beforeLastNum;
    console.log(fiboNum, lastFiboNum, beforeLastNum);
    beforeLastNum = lastFiboNum;
    lastFiboNum = fiboNum;
  }

  console.log(fiboNum);
  return fiboNum;
  // console.log(fiboNum);
  // if (num <= 1) {
  //   return 1;
  // } else {
  //   return fibo(num - 1) + fibo(num - 2);
  // }
}
function fibosResult(num) {
  let last1 = 1;
  let last2 = 1;
  let result = 1;

  for (let i = 1; i < num; i++) {
    // 1+ 1 = 2 , 1 + (1+1) = 3 , 2 + 3 = 5 , 3 + 5 = 8
    // console.log("fibosResult", last1, last2, result);
    result = last1 + last2;
    last1 = last2;
    last2 = result;
  }
  return result;
}

console.log(fibo(8));
console.log("result", fibosResult(4));
