globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체

const getPingName = function () {
  return this.name; // baro.name
};

const baro = new Object();
baro.name = "바로핑";
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};

//==========================================================//
// 🚀 객체를 생성해서 반환하는 함수를 만들어보자
// function Ping(name, age) {
//   const obj = {}; // 빈 객체 하나 생성
//   obj.name = name; // name 속성 추가
//   obj.age = age; // age 속성 추가
//   obj.getName = function () {
//     // getName 메서드 추가
//     return this.name;
//   };
//   return obj; // 객체 리턴
// }

// 🚀 생성자 함수
function Ping(name, age) {
  const obj = {}; // 빈 객체 하나 생성
  obj.name = name;
  obj.age = age;
  obj.getName = function () {
    return this.name;
  };
  return obj;
}

// new의 동작
// 1. 빈 객체를 참조하는 this 생성
// 2. this를 생성자 함수에 전달
// 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
const copyPing = new Ping("훈진", 23);

console.log(copyPing.name); // "훈진"
console.log(copyPing.age); // 23
console.log(copyPing.getName()); // "훈진"
console.log("==========================");
// const copyPing = Ping("훈진", 23);
// console.log(copyPing.name); // "훈진"
// console.log(copyPing.age); // 23
// console.log(copyPing.getName()); // "훈진"
