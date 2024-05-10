// 바탕화면 정리

function desktopCleanup(wp) {
  let [top, right, bottom, left] = [null, 0, 0, wp[0].length];
  for (let i = 0; i < wp.length; i++) {
    const XList = wp[i].indexOf("#"); // 맨 앞에 있는 # 의 index를 가져온다
    const XLastOfList = wp[i].lastIndexOf("#"); // 맨 뒤에있는 # 의 index를 가져온다 (중복이 있으니)
    console.log(XList);
    if (XList !== -1) {
      console.log(XList, i, top);
      if (top === null) top = i; // top 이 null 로 되어있기 때문에 처음으로 i 가 top에 적용되어지면 제 일 위에가 적어진다.
      bottom = i + 1; // bottom 은 제일 마지막 번 # 의 마지막번이 어디인지 알아야 함으로
      left = Math.min(left, XList);
    }
    if (XLastOfList !== -1) {
      right = Math.max(right, XLastOfList + 1);
    }
  }
  return [top, left, bottom, right];
} // [ y > top,  x > left,  y > bottom, x > right]

// desktopCleanup([".#...", "..#..", "...#."]); // [0,1,3,4]
desktopCleanup([
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
]); //[1,3,5,8]
// desktopCleanup([
//   ".##...##.",
//   "#..#.#..#",
//   "#...#...#",
//   ".#.....#.",
//   "..#...#..",
//   "...#.#...",
//   "....#....",
// ]);
