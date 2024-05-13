// 옹알이2

function Babbling2(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  var answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let bab = babbling[i];

    for (let j = 0; j < word.length; j++) {
      if (bab.includes(word[j].repeat(2))) {
        // bab 에서 word 가 무조건 두 번 나오면 break 다
        break;
      }
      // bab에서 가져와서 word 를 split 한다음 남은 단어를 bab에다 넣어 다음 word 에서 검사하게 하여 공백이 남거나 단어가 남거나 한다.
      const babSplit = bab.split(word[j]).join(" ");
      bab = babSplit;
    }

    // 공백만 있을 떄 answer 를 1씩 증가 시켜준다. > 여러개를 처리하기 위해서 공백이 생긴다.
    if (bab.split(" ").join("").length === 0) {
      answer += 1;
    }
  }
  return answer;
}

Babbling2(["aya", "yee", "u", "maa"]); // 1
Babbling2(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]); // 2
