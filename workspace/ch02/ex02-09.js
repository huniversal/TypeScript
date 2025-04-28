/*
  함수 생성 3 (Function 생성자 함수)
*/

// Function 생성자 함수 이용
// 잘 안쓰니까 그냥 이렇게 있다~만 알아두셈
const add = new Function("a", "b", "return a + b;");

console.log(add(10, 20));
