function TheGiftReceiveTheMost(friends, gift) {
  let frObject = {};
  friends.forEach((fr) => (frObject[fr] = 0)); // { muzi: 0, ryan: 0, frodo: 0, neo: 0 } 형태로 만들어준다.
  let frOb = {};
  friends.forEach((fr) => {
    frOb[fr] = Object.assign({}, frObject);
  });
  // {
  //   muzi: { muzi: 0, ryan: 0, frodo: 0, neo: 0 },
  //   ryan: { muzi: 0, ryan: 0, frodo: 0, neo: 0 },
  //   frodo: { muzi: 0, ryan: 0, frodo: 0, neo: 0 },
  //   neo: { muzi: 0, ryan: 0, frodo: 0, neo: 0 }
  // }

  gift.forEach((item) => {
    let [giver, receiver] = item.split(" ");

    frOb[giver][receiver] += 1; // 준사람이 받은사람에게 +
    frOb[giver][giver] += 1; // 자기 자신이 누구에게 줬는지 +
    frOb[receiver][receiver] -= 1; //  자기 자신이 누군가에게 받았는지 -
  });

  // console.log(frOb);
  let max = 0;
  // let result = {}
  friends.forEach((fr) => {
    console.log(fr);
    let counting = 0;
    friends.forEach((frT) => {
      console.log("frT", frT);
      if (fr !== frT) {
        let one = frOb[fr][frT];
        let two = frOb[frT][fr];

        if (one > two || (one === two && frOb[fr][fr] > frOb[frT][frT])) {
          // console.log(one, "ss", two, frOb[fr]);
          counting += 1;
        }
      }
    });
    max = Math.max(max, counting);
  });
  // console.log(max);
}

TheGiftReceiveTheMost(
  ["muzi", "ryan", "frodo", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
  ]
);

// TheGiftReceiveTheMost(
//   ["a", "b", "c"],
//   ["a b", "b a", "c a", "a c", "a c", "c a"]
// );

// 2
function solution(friends, gifts) {
  const length = friends.length;
  const giftPoints = new Array(length).fill(0);
  const index = {};
  const record = [];
  const points = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    record[i] = new Array(length).fill(0);
    index[friends[i]] = i;
  }
  for (const gift of gifts) {
    const [giver, taker] = gift.split(" ");
    record[index[giver]][index[taker]] += 1;
    giftPoints[index[giver]] += 1;
    giftPoints[index[taker]] -= 1;
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (record[i][j] > record[j][i]) {
        points[i] += 1;
      } else if (record[i][j] === record[j][i]) {
        if (giftPoints[i] > giftPoints[j]) {
          points[i] += 1;
        }
      }
    }
  }
  return Math.max(...points);
}
