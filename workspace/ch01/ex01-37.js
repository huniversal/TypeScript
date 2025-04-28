/*
Call by Value와 Call by Reference 차이
*/

function add10(data1, data2) {
  data1 += 10;
  data2[0] += 10;
  console.log(data1, data2[0]);
}

let d1 = 80;
let d2 = [80];

console.log("함수 호출 이전", d1, d2);

add10(d1, d2);

console.log("함수 호출 이후", d1, d2);
