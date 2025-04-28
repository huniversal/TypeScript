/*
객체의 속성 관리
*/

const foo = {
  name: "훈진",
  mainJob: "개발자",
};
// 객체 prop 읽기
console.log(foo.name, foo["mainJob"], foo.subJob);

// 객체 prop 갱신
foo.subJob = "스피노사우르스";
console.log(foo.name, foo["mainJob"], foo.subJob);

// 객체 prop 동적 생성
foo.subJob = "트리케라톱스";
console.log(foo.name, foo["mainJob"], foo.subJob);

// 객체 prop 동적 삭제
delete foo.mainJob;
console.log(foo.name, foo["mainJob"], foo.subJob);

console.log(foo);

console.log("------------------");
// 객체의 모든 prop 읽기
for (let prop in foo) {
  console.log(`${prop}: ${foo[prop]}`);
}
