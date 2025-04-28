/*
new Object() - 생성자 함수로 객체 생성
*/

// 회원의 속성
const userName_1 = "시진핑";
const userNo_1 = 3;
const userGender_1 = "male";
const userLevel_1 = "diamond";
const userPassword_1 = "1234";
const userAge_1 = 30;
const userEmail_1 = "gnswls3945@gmail.com";

// 호정핑의 속성
const userName_2 = "호정핑";
const userNo_2 = 4;
const userGender_2 = "female";
const userLevel_2 = "gold";
const userPassword_2 = "1234";
const userAge_2 = 30;
const userEmail_2 = "houuuuu5@gmail.com";

// 몰라핑 회원의 속성(객체, Obj)
const user1 = new Object();
user1.userName = "시진핑";
user1.userNo = 3;
user1.userGender = "male";
user1.userLevel = "diamond";
user1.userPassword = "1234";
user1.userAge = 30;
user1.userEmail = "gnswls3945@gmail.com";

console.log(user1.userName);

// 호정핑 회원의 속성(객체, Obj)
const user2 = new Object();
user2.userName = "호정핑";
user2.userNo = 4;
user2.userGender = "female";
user2.userLevel = "gold";
user2.userPassword = "1234";
user2.userAge = 30;
user2.userEmail = "houuuuu5@gmail.com";

console.log(user2.userName);
