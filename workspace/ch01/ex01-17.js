/*
if-else문

if(조건식) {
    조건식이 참일 때 실행할 코드;
    조건식이 참일 때 실행할 코드;
    ......
} else {
    조건식이 거짓일 때 실행할 코드;
    조건식이 거짓일 때 실행할 코드;
    ......
}
*/

const num = 5;
if (num > 0) {
  console.log("num은 양수입니다.");
} else {
  if (num < 0) {
    console.log("음수");
  } else {
    console.log("0");
  }
}

const num2 = 342340;
if (num2 % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

const num3 = 14;
if (num3 % 3 === 0) {
  console.log("3의 배수");
} else {
  console.log("3의 배수가 아닙니다.");
}
