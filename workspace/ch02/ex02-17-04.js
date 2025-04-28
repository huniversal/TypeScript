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
