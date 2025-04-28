/*
마지막 구매 항목을 출력해라  
firstChild, firstElementChild, lastChild, lastElementChild: 자식요소 접근  
*/

let shoppingListByClass = document.getElementsByClassName("list")[0];

console.log(
  "마지막으로 사야할 품목",
  shoppingListByClass.lastElementChild.firstChild.nodeValue
);
