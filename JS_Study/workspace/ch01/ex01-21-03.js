/* 
for문을 이용해서 구구단을 작성
*/

// const dan = 3;

// for (let i = 1; i <= 9; i++) {
//   const result = dan * i;
//   console.log(`${dan} X ${i} = ${result}`);
// }

// for (let i = 2; i <= 9; i++) {
//   console.log(`\n 구구구구구 ${i}단`);
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

// for (let i = 2; i <= 9; i++) {
//   let line = "";
//   for (let j = 1; j <= 9; j++) {
//     line += `${i} x ${j} = ${i * j}\t`;
//   }
//   console.log(line);
// }

for (let j = 1; j <= 9; j++) {
  let line = "";
  for (let i = 2; i <= 9; i++) {
    line += `${i} x ${j} = ${i * j}\t`;
  }
  console.log(line);
}
