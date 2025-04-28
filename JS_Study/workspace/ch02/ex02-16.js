/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

// window.name = 'global'; // window, 브라우저가 가지고 있는 전역 객체
// global.nbame = 'global; // node.js가 가지고 있는 전역 객체
globalThis.name = "글로벌";

const getPingName = () => {
  return this.name; // 상위 Scope의 this를 찾는다(window)
};

const baro = new Object();
baro.name = "훈진핑";
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: "라라",
  age: 8,
  getName: getPingName,
};

// 함수 호출하는 방법 1 - 일반 함수로 호출(this)
console.log(getPingName());

// 함수 호출하는 방법 2 - 메소드로 호출(this는 메소드를 정의한 객체);
console.log(baro.age, baro.getName()); //getName()의 this는 baro
console.log(rara.age, rara.getName()); //getName()의 this는 rara
