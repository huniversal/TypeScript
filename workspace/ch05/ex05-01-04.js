/*
querySelector를 이용해서 첫 번째, 마지막 항목 출력  
*/

console.log(
  "첫 번째 항목:",
  document.querySelector("#purchases > li:first-child").firstChild.nodeValue
);

console.log(
  "마지막 항목:",
  document.querySelector("#purchases > li:last-child").firstChild.nodeValue
);
