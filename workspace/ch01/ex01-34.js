/*
반환값이 있는 함수 - 토스터
*/

function toaster(time, bread) {
  return time + "초 동안 구워진 " + bread;
}

const toaster_1 = toaster(40, "우유 식빵");
const toaster_2 = toaster(60, "호밀 식빵");

console.log(toaster_1);
console.log(toaster_2);
