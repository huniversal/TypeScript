/* 
국어, 영어, 수학 점수
총점과 평균을 출력하는 프로그램
*/

// const score = {
//   kor: 100,
//   eng: 90,
//   math: 85,
// };

// const sum = () => score.kor + score.eng + score.math;
// const avg = () => Math.round(sum() / Object.keys(score).length);

// console.log(`총점: ${sum()}`);
// console.log(`평균: ${avg()}`);

// console.log(`총점: ${sum}`);
// console.log(`평균: ${Math.round(avg)}`);

const score = {
  userName: "훈진",
  kor: 100,
  eng: 90,
  math: 85,

  sum: function () {
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return Math.round(this.sum() / Object.keys(score).length);
  },
  print: function () {
    console.log(`총점: ${this.sum()}`);
    console.log(`평균: ${this.avg()}`);
  },
};

score.print();
