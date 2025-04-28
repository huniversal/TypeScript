/*
첫 번째 구매 항목 출력(두부)하고 그 값을 양파로 수정  
document.getElementById(id) 속성으로 요소 선택  
텍스트 노드의 nodeValue : 문자열 값  
*/

let shoppingListById = document.getElementById("purchases");

const firstLi = shoppingListById.firstElementChild;
console.log(firstLi);

const firstTextNode = firstLi.firstChild;
console.log(firstTextNode);
console.log("제일 먼저 구매할 항목", firstTextNode.nodeValue);

firstTextNode.nodeValue = "양파";
