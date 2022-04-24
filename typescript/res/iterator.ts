let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

// 반복자 for-of 로 반복
for (let a of numbers) {
  console.log(a);
}

// 반복자 스프레드
let allNumbers = [...numbers];
console.log(allNumbers);

// 반복자 구조분해 할당
let [one, two, ...rest] = numbers;
console.log(rest);
