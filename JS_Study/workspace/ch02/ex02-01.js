"use strict";

/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

// 👉 기본 타입 선언
const num = 100; // 숫자(Number)
const str = "hello"; // 문자열(String)
const obj = {}; // 빈 객체(Object)
const arr = [num, str]; // 배열(Array) 초기화 [100, "hello"]

// 👉 함수를 선언
function foo() {
  return "I am foo | "; // "foo" 문자열 반환
}

// 👉 배열에 객체 추가
arr.push(obj); // [100, 'hello', {}]

// 👉 배열에 함수 추가
arr.push(foo); // [100, 'hello', {}, function foo() {}]

// 👉 객체에 함수(메서드) 추가
obj.bar = foo; // 객체 obj에 bar 프로퍼티로 foo 함수 할당
obj.baz = function () {
  return "I am baz | "; // "baz" 문자열 반환
};

// 👉 콘솔 출력 (순서별 해석)
console.log(
  foo(), // "foo" 출력 (함수 직접 호출)
  arr[3](), // 배열 3번 인덱스에 있는 foo 함수 호출 → "foo" 출력
  obj.bar(), // 객체의 bar 프로퍼티(foo 함수) 호출 → "foo" 출력
  arr[2].bar(),
  obj.baz() // 다시 baz 메서드 호출 → "baz" 출력
);

//===============================================//
function foo() {
  console.log("this inside foo:", this);
  console.log("isArray?", Array.isArray(this)); // this가 배열인지 바로 체크
  console.log("typeof this:", typeof this);
  return "I am foo | ";
}
arr[3]();
