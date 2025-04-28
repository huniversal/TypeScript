console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 1️⃣ 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  //   // 1. 배열의 첫번째 요소를 최소값으로 설정
  //   let min = nums[0];

  //   // 2. 배열을 순회하면서 최소값을 찾는다.
  //   for (let i = 0; i < nums.length; i++) {
  //     // 3. 현재 요소가 최소값보다 작으면
  //     if (nums[i] < min) {
  //       // 4. 최소값을 현재 요소로 변경
  //       min = nums[i];
  //     }
  //   }
  //   // 5. 최소값을 반환
  //   return min;
  // 2️⃣ apply 방식
  const min = Math.min.apply(null, nums);
  return min;
}

// 3️⃣ 스프레드 방식
// function smallest(nums) {
//   return Math.min(...nums);
// }

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
