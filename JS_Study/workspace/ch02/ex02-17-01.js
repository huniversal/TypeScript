/*
카운터 예제
*/

let count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // this는 myObj를 가리킨다.
    // 방문자를 한명 증가시킨다.
    this.count++;
    const that = this;
    var visit2 = function () {
      that.count++;
    };
    visit2();
  },
};
myObj.visit(); // this는 myObj를 가리킨다.
myObj.visit(); // this는 myObj를 가리킨다.
console.log("방문자수", myObj.count);
