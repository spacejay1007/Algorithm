// 숫자 문자열과 영단어
// 그저 감탄스럽다
const string = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solution(s) {
  let answer = s;
  for (let i = 0; i < string.length; i++) {
    // string 과 같은 녀석만 찾으면 되니깐 number 는지나간다
    let arr = answer.split(string[i]); // split 으로 해당 string 의 단어를 없애준다.
    answer = arr.join(i); // 없어진 곳에 그 단어의 번호를 그대로 넣어준다
  }
  return +answer; // 마지막 리턴에는 string 값을 number 로 바꿔서 리턴해준다.
}

solution("one4seveneight");
solution("23four5six7");
solution("1zerotwozero3");
