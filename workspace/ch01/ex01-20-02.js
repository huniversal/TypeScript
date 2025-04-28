/*
반복문 - while문

1부터 10까지 홀수의 합계 출력
1부터 10까지 짝수의 합계 출력
*/

let i = 1;
let oddSum = 0;
let evenSum = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
  i++;
}

console.log(`짝수의 합계는 : ${evenSum}`);
console.log("-------------");
console.log(`홀수의 합계는 : ${oddSum}`);
