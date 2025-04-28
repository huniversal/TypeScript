const mylib = {};

// isPrime = isPrime.memoize();
Function.prototype.memoize = function () {
  const fn = this; // isPrime
  return function () {
    return fn.memo.apply(fn, arguments); // isPrime.memo(5)
  };
};

//=========================================================//
Function.prototype.memo = function (key) {
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    // num에 대해서 계산이 끝나고 캐시된 경우
    return this._cache[key];
  }
  return (this._cache[key] = this(key));
};
//=========================================================//
mylib.inherite = function (Parent, Child) {
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  // Object.create() : 지정한 프로토타입 객체를 참조하는 인스턴스를 생성하는 코드
  Child.prototype = Object.create(Parent.prototype);

  Child.prototype.constructor = Child;
};
