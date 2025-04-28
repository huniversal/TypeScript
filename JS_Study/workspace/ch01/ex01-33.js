/*
반환값이 있는 함수
*/

// 10 + 100의 결과를 출력하는 함수
const add = () => {
  console.log(10 + 100);
};

add();

// 전달받은 숫자와 100의 합계를 출력하는 함수
const sum = (n) => {
  console.log(n + 100);
};

sum(10);

// 전달 받은 두 숫자의 합계를 출력하는 함수
const total = (n1, n2) => {
  console.log(n1 + n2);
};

total(30, 40);
