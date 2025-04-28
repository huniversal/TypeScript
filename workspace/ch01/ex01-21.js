/*
반복문 - for문
*/

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(i, sum);
}
console.log("합계", sum);

// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1부터 10까지 홀수의 합계
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(`홀수의 합계는 : ${oddSum}`);
console.log("-------------");
console.log(`짝수의 합계는 : ${evenSum}`);
