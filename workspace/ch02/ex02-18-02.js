console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 스프레드 방식
// function smallest(nums) {
//   return Math.min(...nums);
// }

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
