/*
반복문 - break, continue
*/
// n ~ m 까지의 정수중에서 첫번째 짝수를 찾아서 출력하세요

const n = 1;
const m = 10;

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    console.log(`첫 번째 짝수: ${i}`);
    break;
  }
}

// n부터 m까지 홀수를 출력하세요
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// n부터 m까지 홀수와 짝수를 구분헤서 출력하세요
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log("홀수", i);
    continue;
  }

  console.log(짝수, i);
}
