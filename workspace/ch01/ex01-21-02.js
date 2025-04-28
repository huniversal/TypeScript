/*
반복문 - for문
별찍기

***
****
*****
*/

const floor = 5;
for (let i = 1; i <= floor; i++) {
  let star = "*";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
console.log("-------------------------1");

for (let i = 1; i <= floor; i++) {
  let star = "*";
  for (let k = floor; k > i; k--) {
    star += "*";
  }
  console.log(star);
}
console.log("-------------------------2");
for (let i = 1; i <= floor; i++) {
  let space = " ".repeat(5 - i); // 공백
  let star = "*".repeat(i); // 별
  console.log(space + star);
}

console.log("-------------------------3");
for (let j = 1; j <= floor; j++) {
  console.log("*".repeat(j));
}

for (let q = floor; q >= 1; q--) {
  console.log("*".repeat(q));
}
