const arr = [1,2,3,4,5,6,7]
const arrFill = arr.fill(3, 0,5)
console.log(arrFill)    // [ 3, 3, 3, 3, 3, 6, 7 ]
// fill (value, start, end) start는 시작 인덱스(기본값0), end는 끝 인덱스 기본값은 배열의 길이.

const str = "as"
console.log(str.charCodeAt(1))  // 115
console.log(str.charCodeAt(0))  // 97
// charCodeAt(index) => 문자열을 아스키코드 번호로 바꿔줌. index는 문자열 자리 번호

console.log(String.fromCharCode(115))   // s
console.log(String.fromCharCode(97))    // a
// fromCharCode(아스키코드 번호) 아스키코드 번호를 해당하는 문자로 바꿔줌.

const num = [32,15,2,31,2]
const max = Math.max(...num)
console.log(max)    // 32
// Math.max(...array:number[]) => 배열 내의 최대값을 반환