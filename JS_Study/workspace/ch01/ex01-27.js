/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

// const arr = [1, 2, 3, 4];

// 배열의 모든 요소 출력(forEach)
// console.log("for");
// arr.forEach((element, index) => {
//   console.log(index, element);
// });

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = {
//   total: 0,
//   even: 0,
//   odd: 0,
// };

// for (const num of arr) {
//   sum.total += num;
//   num % 2 === 0 ? (sum.even += num) : (sum.odd += num);
// }

// console.log("총합:", sum.total);
// console.log("짝수 합:", sum.even);
// console.log("홀수 합:", sum.odd);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = {
  total: 0,
  even: 0,
  odd: 0,
};

for (const index in arr) {
  const num = arr[index];
  sum.total += num;
  num % 2 === 0 ? (sum.even += num) : (sum.odd += num);
}

console.log("총합:", sum.total);
console.log("짝수 합:", sum.even);
console.log("홀수 합:", sum.odd);

const sum_1 = {
  total: 0,
  even: 0,
  odd: 0,
};

for (const num of arr) {
  sum.total += num;
  num % 2 === 0 ? (sum_1.even += num) : (sum_1.odd += num);
}

console.log("총합:", sum_1.total);
console.log("짝수 합:", sum_1.even);
console.log("홀수 합:", sum_1.odd);

// for..of, 인덱스는 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때
