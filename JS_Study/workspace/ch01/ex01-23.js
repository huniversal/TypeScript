/*
TODO object 생성자 함수
new Object() - 생성자 함수로 객체 생성
*/

const foo = new Object();
foo.name = "함수핑";
foo["age"] = 25;
foo.job = "마법사";
foo["married"] = false;

console.log(foo["name"], foo.age, foo.job, foo["marreid"]);
console.log(typeof foo, foo.toString(), foo);
