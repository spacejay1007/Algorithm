// programmers > 문자열 나누기

const t = "banana";
const x = "abracadabra";
const y = "aaabbaccccabba";

const SplitSting = (t) => {
  let arr = [];
  let x = 0;
  let y = 0;

  while (t.length > 0) {
    let count = 0;
    for (let i = 0; i < t.length; i++) {
      t[0] === t[i] ? (x += 1) : (y += 1);
      if (x === y) {
        count = i + 1;
        break;
      }
    }
    console.log(t.slice(0, count));
    arr.push(t.slice(0, count));
    t = t.slice(count);
    if (count === 0) break;
  }
  console.log(arr);
};

SplitSting(t);
// SplitSting(x);
// SplitSting(y);
