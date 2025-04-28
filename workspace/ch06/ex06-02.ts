// 기본 타입

(() => {
  let str: string = "hello";
  let num: number = 9;
  let bool: boolean = true;
  // done = false; // 컴파일 에러
  let nullVal: null = null;
  let emptyVal: undefined = undefined;

  let todo: object = { title: "TypeScript 공부", done: false };
  let todoList: Array<string> = ["JS", "TS"];
  let todoList2: string[] = ["REACT", "NEXT.js"];

  // tuple : 길이가 고정되고 각 요소의 타입이 정의된 타입
  let items: [string, number] = ["hello", 1];

  let userName: any = "Lee";
  userName = 523;

  let userName2: unknown = "Lee hj";
  userName2 = 230;
})();
