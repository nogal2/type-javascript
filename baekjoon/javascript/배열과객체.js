// colorsArray 배열
let colorsArray = ["orange", "yellow", "green"];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

//colorsObj 객체
// prettier-ignore
let colorsObj = {
  '0': "orange",
  '1': "yellow",
  '2': "green",
};
console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

// typeof 연산자 비교
console.log(typeof colorsArray); //object
console.log(typeof colorsObj); // object

// length 프로퍼티
console.log(colorsArray.length);
console.log(colorsObj.length); // undefined
