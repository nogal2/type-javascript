function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (a <= 5) {
    yield a; // 산출값.
    [a, b] = [b, a + b];
  }
}

let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator); // Object [Generator] {}
console.log(fibonacciGenerator.next()); // { value: 0, done: false }  false는 아직 안끝남. true가 끝남
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 2, done: false }
console.log(fibonacciGenerator.next()); // { value: 3, done: false }
console.log(fibonacciGenerator.next()); // { value: 5, done: false }
console.log(fibonacciGenerator.next()); // { value: undefined, done: true }

function* createNumbers(): IterableIterator<number> {
  let n = 0;
  while (1) {
    yield n++;
  }
}

let numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
