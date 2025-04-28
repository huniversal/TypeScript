/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언
function add(x, y) {
  console.log(this);
  const result = x + y;
  return result;
}

console.log(add(10, 20)); // 30, this는 window
console.log(add.call({ name: "콜" }, 30, 40)); // 70, this = {name : "콜"}
console.log(add.apply({ name: "어플라이" }, [50, 60])); // 70, this = {name : "어플라이"}
