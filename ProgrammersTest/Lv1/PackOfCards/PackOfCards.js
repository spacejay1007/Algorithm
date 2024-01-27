// 카드 뭉치

function solution(cards1, cards2, goal) {
  for (const goals of goal) {
    if (cards1[0] == goals) {
      cards1.shift();
    } else if (cards2[0] == goals) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

// 1
function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] == cards1[j]) j++;
    else if (goal[i] == cards2[k]) k++;
    else return "No";
  }
  return "Yes";
}
