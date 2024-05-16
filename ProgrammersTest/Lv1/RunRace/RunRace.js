function RunRace(players, callings) {
  callings.forEach((call, index) => {
    const playerIdx = players.indexOf(call);
    const item = players.splice(playerIdx - 1, 1)[0]; // playerIdx 부터 한개의 요소를 제거

    players.splice(playerIdx, 0, item); // 기존에 있었던 playIdx 에 그대로 item 을 넣어주겠다
  });
  return players;
}
// 시간 초과다...
RunRace(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]); // ["mumu", "kai", "mine", "soe", "poe"]

function solution1(players, callings) {
  const playerMap = {};

  // calling 원소들의 idx를 미리 구해서 저장
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }
  for (let i = 0; i < callings.length; i++) {
    const idx = playerMap[callings[i]];

    const temp = players[idx - 1];
    // 해당 idx와 이전 idx의 원소를 swap
    // 배열의 데이터 자체를 바꿔준다
    players[idx - 1] = callings[i];
    players[idx] = temp;

    // map의 idx도 갱신 > 객체의 value 값을 바꿔준다
    playerMap[callings[i]] = idx - 1;
    playerMap[temp] = idx;
  }

  return players;
}
// 시간 초과다...
solution1(
  ["mumu", "soe", "poe", "kai", "mine"],
  ["kai", "kai", "mine", "mine"]
); // ["mumu", "kai", "mine", "soe", "poe"]

function solution2(players, callings) {
  // const hash = new Map();

  callings.forEach((name) => {
    const currIdx = players.indexOf(name);
    [players[currIdx], players[currIdx - 1]] = [
      players[currIdx - 1],
      players[currIdx],
    ];
  });
  console.log(players);
}
// 시간 초과다... > 내가 풀이한거에 그냥 변형 방법...
solution2(
  ["mumu", "soe", "poe", "kai", "mine"],
  ["kai", "kai", "mine", "mine"]
); // ["mumu", "kai", "mine", "soe", "poe"]
