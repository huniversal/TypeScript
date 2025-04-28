/**
 * 국어, 영어, 수학 점수를 받아서 총점과 평균을 계산할 수 있는 객체를 생성
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 * @param {number} math 수학 점수
 */

const Score = function (kor, eng, math) {
  this.kor = kor || 0;
  this.eng = eng || 0;
  this.math = math || 0;

  // 총점
  this.sum = function () {
    // TODO Closure : 실행이 완료된 함수의 지역변수가 참조 가능한 상태로 유지되는 현상
    // return kor + eng + math;
    return this.kor + this.eng + this.math;
  };

  // 평균
  this.avg = function () {
    return this.sum() / 3;
  };
};

// 바로핑은 점수가 각각 100, 90, 80점이다.
const baro = new Score(100, 90, 80);
// 라라핑은 점수가 각각 90, 80, 60점이다.
const rara = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하세요
console.log(baro.sum(), baro.avg());
console.log(rara.sum(), rara.avg());

// 수학점수를 10점 올린 후 총점과 평균을 구하세요
baro.math += 10;
rara.math += 10;
console.log(baro.sum(), baro.avg());
console.log(rara.sum(), rara.avg());
