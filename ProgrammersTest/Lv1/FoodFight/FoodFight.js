function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    const foodFloor = food[i] % 2 === 1 ? food[i] - 1 : food[i];
    arr.push(String(i).repeat(foodFloor / 2));
  }

  console.log(arr.join("") + food[0] + arr.reverse().join(""));
  return arr.join("") + food[0] + arr.reverse().join("");
}

// [0] = 물 , 음식은 양쪽으로 나누어야 하니 짝수로 해야한다 홀수 일 경우에는 한개를 버린다
solution([1, 3, 4, 6]); // "1223330333221"
solution([1, 7, 1, 2]); // "111303111"

// 2
function solution2(food) {
  return food.reverse().reduce((acc, cur, idx) => {
    const calorie = (food.length - idx - 1).toString();
    console.log(calorie, acc, cur);
    const repeatedFood = calorie.repeat(parseInt(cur / 2));
    return repeatedFood + acc + repeatedFood;
  }, "0");
}
