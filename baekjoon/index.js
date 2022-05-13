//함수 호이스팅

// 함수 선언식
console.log(add(2, 3)); // 5

function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // 7

console.log(minus(3, 2)); //  Cannot access 'minus' before initialization

let minus = function (x, y) {
  return x - y;
};

console.log(minus(5, 3));
