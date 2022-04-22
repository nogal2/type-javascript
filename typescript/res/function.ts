// 이름을 붙인 함수
function greet(name: string) {
  return "hello" + name;
}

// 함수 표현식
let greet2 = function (name: string) {
  return "hello" + name;
};

// 화살표 함수 표현식
let greet3 = (name: string) => {
  return "hello" + name;
};

// 단축형 화살표 함수 표현식
let greet4 = (name: string) => "hello" + name;

// 함수 생성자
let greet5 = new Function("name", 'return "hello" + name');

function add(a: number, b: number) {
  return a + b;
}

add(1, 2);
greet("Crystal");
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)();

// 선택적 매개변수
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}

log("Page loaded");

function log2(message: string, userId = "Not signed in") {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
}

log("User clicked on a button", "da763be");

type Context = {
  appId?: string;
  userId?: string;
};

function log3(message: string, context: Context = {}) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, context.userId);
}

// 나머지 매개변수
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum([2, 3, 4]));

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
