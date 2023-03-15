const fs = require("fs");
const route = "./kjy/algorithm/personalStudy/binarySearch/binarySearch.txt";
// const input = fs.readFileSync(route).toString().split("\n")[0];

// 이진 탐색
// 정렬된 리스트에 사용 되는 탐색 알고리즘
// 리스트에서 탐색범위를 절반씩 좁혀가며 특정한 값을 찾을 때 사용
// 속도가 빠르고 효율적 O(log n)

const arr = [1, 10, 12, 13, 19, 20, 30, 47, 59, 63, 75, 88, 99];

const func = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target < arr[mid]) {
      console.log(arr[mid]);
      high = mid - 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      console.log(mid);
      return mid;
    }
  }
  return -1;
};

func(arr, 20);
