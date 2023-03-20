// 객체 비교하기
const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    f: -1,
    e: null,
  },
};

// 객체는 참조 타입 -> 원시타입(숫자, 문자열) 직접적으로 비교가 불가능하다.
// javascript 는  obj1 === obj2 와 같이 확인 할 수 없다.

// JSON 활용
const isEqual = (objA, objB) => {
  // 원시타입으로 바꿔서 비교
  const oA = JSON.stringify(objA);
  const oB = JSON.stringify(objB);

  // split 과 sort 를 하는 경우는 내용은 같지만 순서가 다른 경우를 생각하여서 정열해준다.
  return oA.split("").sort().join("") === oB.split("").sort().join("");
};

// Object, Array 활용
const isEqualOb = (objA, objB) => {
  const checkObject =
    objA && objB && typeof objA === "object" && typeof objB === "object";

  if (checkObject && Object.keys(objA).length === Object.keys(objB).length) {
    // array 함수 reduce 사용
    return Object.keys(objA).reduce((eq, key) => {
      // eq === prev 재귀를 통해서 자기 자신을 호출한다.
      return eq && isEqualOb(objA[key], objb[key]);

      // 초기값을 true로 해준다.
    }, true);
  } else {
    return objA === objB;
  }
};

console.log(isEqualOb(obj1, obj2));
