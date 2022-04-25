type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};

// T는 number로 한정됨
console.log(filter([1, 2, 3, 4], (_) => _ < 3)); // [ 1, 2 ]

// T는 string으로 한정됨
console.log(filter(["a", "b"], (_) => _ !== "b"));

// T는 {firstName: string}으로 한정됨
let names = [
  { firstName: "beth" },
  { firstName: "caitlyn" },
  { firstName: "xin" },
];

console.log(filter(names, (_) => _.firstName.startsWith("b")));
/* 
타입 추론 과정
1. filter의 타입 시그니처를 통해 array가 타입이 T인 요소들로 이루어진 배열임을 알게된다.
2. 전달된 인수 array[1,2,3]을 통해 T는 분명 number라는 사실을 알게된다.
3. 이제 모든 T를 number 타입으로 대치한다. 따라서 매개변수 f:(item:T) => boolean는 f:(item:number) => boolean이 되고 반환 타입 T[]는 number[]가 된다.
4. 모든 타입이 할당 조건을 만족하는지, 전달받은 함수 f를 새로 추론한 시그니처에 할당할 수 있는지 확인한다.
*/
