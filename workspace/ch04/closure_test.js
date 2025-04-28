// const counter = (function () {
//   let num = 0;

//   return {
//     increase: function () {
//       return ++num;
//     },
//     decrease: function () {
//       return --num;
//     },
//   };
// })();
// console.log(counter.increase());
// console.log(counter.increase());
// console.log(counter.decrease());
// console.log(counter.decrease());

//==========================================//

// function makeCounter(predicate) {
//   let counter = 0;

//   return function () {
//     counter = predicate(counter);
//     return counter;
//   };
// }

// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());

//==========================================//

// function Person(name, age) {
//   this.name = name;
//   let _age = age;

//   this.sayHi = function () {
//     console.log(`안녕하세요 ${this.name}입니다. 저는 ${_age}살입니다.`);
//   };
// }

// const me = new Person("훈진핑", 25);
// me.sayHi();
// console.log(me.name); // 훈진핑
// console.log(me._age); // undefined

// const you = new Person("다은핑", 25);
// you.sayHi();
// console.log(you.name); // 다은핑
// console.log(you._age); // undefined

//==========================================//

const Person = (function () {
  let _age = 0;

  function Person(name, age) {
    this.name = name;
    _age = age;
  }
  Person.prototype.sayHi = function () {
    console.log(`안녕하세요 ${this.name}입니다. 저는 ${_age}살입니다.`);
  };
  return Person;
})();

const me = new Person("훈진핑", 25);
me.sayHi();
console.log(me.name); // 훈진핑
console.log(me.age); // undefined

const you = new Person("다은핑", 25);
you.sayHi();
console.log(you.name); // 다은핑
console.log(you._age); // undefined

//==========================================//
