// /*
// 카운터 예제
// */

// let count = 0;
// const myObj = {
//   count: 0,
//   visit: function () {
//     // this는 myObj를 가리킨다.
//     // 방문자를 한명 증가시킨다.
//     this.count++;
//     const visit2 = () => {
//       this.count++;
//     };
//     visit2();
//   },
// };
// myObj.visit(); // this는 myObj를 가리킨다.
// myObj.visit(); // this는 myObj를 가리킨다.
// console.log("방문자수", myObj.count);
// ex02-17-01.js

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가
    this.count++; // this = myObj
    const visit2 = function () {
      this.count++; // that = myObj
    };
    visit2();
  },
};
myObj.visit(); // this = myObj
myObj.visit();
console.log("총 방문자 수: ", myObj.count);
