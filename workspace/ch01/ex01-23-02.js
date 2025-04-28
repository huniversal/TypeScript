/* 
국어, 영어, 수학 점수
총점과 평균을 출력하는 프로그램
*/

const score = {
  kor: 100,
  eng: 90,
  math: 85,
};

let sum = 0;

for (let subject in score) {
  sum += score[subject];
}

let avg = sum / Object.keys(score).length;

console.log(`총점: ${sum}`);
console.log(`평균: ${Math.round(avg)}`);
