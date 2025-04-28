/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24],
];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    total += numbers[i][j];
  }
}

console.log("총합:", total);

let total_1 = 0;

for (const row of numbers) {
  for (const num of row) {
    total_1 += num;
  }
}

console.log("총합:", total);
