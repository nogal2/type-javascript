// 배열생성
let arr = ["zero", "one", "two"];
console.log(arr.length);

// 프로퍼티 동적 추가
arr.color = "blue";
arr.name = "number_array";
console.log(arr.length);
console.log(arr); // [ 'zero', 'one', 'two', color: 'blue', name: 'number_array' ]

// 배열 원소 추가
arr[3] = "red";
console.log(arr.length); // 4
console.log(arr); // [ 'zero', 'one', 'two', 'red', color: 'blue', name: 'number_array' ]

for (let prop in arr) {
  console.log(prop, arr[prop]);
  /* 
  0 zero
  1 one
  2 two
  3 red
  color blue
  name number_array
  */
}

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
  /* 
  0 zero
  1 one
  2 two
  3 red
  */
}
