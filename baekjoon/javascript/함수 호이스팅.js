//함수 호이스팅

// 함수 선언식
console.log(add(2, 3)); // 5

function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // 7

// 함수 표현식
console.log(minus(3, 2)); //  Cannot access 'minus' before initialization

let minus = function (x, y) {
  return x - y;
};

console.log(minus(5, 3));

/* 
  함수 선언식은 함수 호이스팅이 되어서 함수 선언 전에 호출을 해도 호출이 되지만,
  함수 표현식은 호이스팅이 일어나지 않기 때문에 안 된다.
*/
