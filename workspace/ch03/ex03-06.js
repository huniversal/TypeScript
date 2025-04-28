/*
 * 클래스 정의와 상속
 * ex03-05.js 복사
 */

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

class HighSchool {
  constructor(kor, eng) {
    this.kor = kor;
    this.eng = eng;
  }
  sum() {
    return this.kor + this.eng;
  }

  avg() {
    // 소수 첫째자리에서 반올림한다.
    return Math.round(this.sum() / 2);
  }
}

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

class College extends HighSchool {
  // constructor(kor, eng) {
  //   super(kor, eng); // 부모의 생성자 호출
  // }
  // constructor를 생략할 경우 자동으로 부모의 생성자가 호출된다.
  // constructor(...args) {
  //   super(...args); // 부모의 생성자 호출
  // }
  grade() {
    const avg = this.avg();
    const grades = [
      { min: 90, grade: "A" },
      { min: 80, grade: "B" },
      { min: 70, grade: "C" },
      { min: 60, grade: "D" },
    ];

    for (const g of grades) {
      if (avg >= g.min) return g.grade;
    }
    return "F";
  }
}

const c1 = new College(80, 99);
console.log(c1.sum());
console.log(c1.avg());
console.log(c1.grade());
