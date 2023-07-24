// Progrrammers > 가운데 숫자 가져오기

const test1 = "abcde";
const test2 = "qwer";

const getMiddleLetter = (word) => {
  if (word.length % 2 === 1) {
    const halfWord = parseInt(word.length / 2);
    return word[halfWord];
  } else {
    const half = parseInt(word.length / 2);
    return word[half - 1] + word[half];
  }
};
getMiddleLetter(test1);
getMiddleLetter(test2);

// 다른 사람 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
