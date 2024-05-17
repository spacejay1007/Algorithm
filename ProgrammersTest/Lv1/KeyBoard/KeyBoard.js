function KeyBoard(keymap, targets) {
  const map = new Map();

  for (let i = 0; i < keymap.length; i++) {
    const key = keymap[i];
    for (let j = 0; j < key.length; j++) {
      if (!map.has(keymap[i][j])) {
        map.set(keymap[i][j], j + 1);
      } else {
        map.set(
          keymap[i][j],
          j < map.get(keymap[i][j]) ? j + 1 : map.get(keymap[i][j])
        );
      }
    }
  }
  // map.forEach((item) => console.log(item));
  // for (const v of map) {
  //   console.log(v);
  //   targets.
  // }
  const arr = [];
  for (let i = 0; i < targets.length; i++) {
    let num = 0;
    for (let j = 0; j < targets[i].length; j++) {
      if (!map.has(targets[i][j])) {
        num = -1;
        break;
      } else {
        num += map.get(targets[i][j]);
      }
    }
    arr.push(num);
  }
  // console.log(map);
  return arr;
}

KeyBoard(["ABACD", "BCEFD"], ["ABCD", "AABB"]); // [9,4]

// 2
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items.split("").map((item, index) => {
      // map[item] = index + 1;
      // console.log(map, item, map[item], index + 1);
      map[item] = map[item] < index + 1 ? map[item] : index + 1;
    });
  }

  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]);
