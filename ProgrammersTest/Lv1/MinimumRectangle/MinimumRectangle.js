function MinimumRectangle(sizes) {
  const width = [];
  const height = [];

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    width.push(max);
    height.push(min);
  }
  return Math.max(...width) * Math.max(...height);
  //   return;
}

MinimumRectangle([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]); // 4000
