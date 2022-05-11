type Mapp = <T, U>(array: T[], f: (item: T) => U) => U[];

function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

let promise = new Promise<number>((resolve) => resolve(45));

promise.then((result) => console.log(result * 4));

type MyEvent<T> = {
  target: T;
  type: string;
};

let a = 0;

if (true) {
  let a = 1;
}
console.log(a); // 0
