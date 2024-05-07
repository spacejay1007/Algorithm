// 바탕화면 정리

function desktopCleanup(wp) {
  let [top, right, bottom, left] = [null, 0, 0, wp[0].length];
  for (let i = 0; i < wp.length; i++) {
    const XList = wp[i].indexOf("#");
    const XLastOfList = wp[i].lastIndexOf("#");
    if (XList !== -1) {
      if (top === null) top = i;
      bottom = i + 1;
      left = Math.min(left, XList);
    }
    if (XLastOfList !== -1) {
      right = Math.max(right, XLastOfList + 1);
    }
  }
  return [top, left, bottom, right];
} // [ y > top,  x > left,  y > bottom, x > right]

desktopCleanup([".#...", "..#..", "...#."]); // [0,1,3,4]
desktopCleanup([
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
]); //[1,3,5,8]
desktopCleanup([
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
]);
