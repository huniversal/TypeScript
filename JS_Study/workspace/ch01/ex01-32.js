/*
매개변수를 가진 함수 - 도어락
*/

function doorlock(password) {
  const pwd = 1234;
  const subPassword = password?.slice(pwd.length);
  if (subPassword === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("삐삐삐삐삐");
  }
}

doorlock("1111111");
doorlock("4238942564");
doorlock();
