// Progrrammers > 포켓몬
// 해쉬 문제

function solution(nums) {
  const num = nums.length / 2;
  const ans = [...new Set(nums)];
  const poket = ans.length >= num ? num : ans.length;
  return poket;
}
