var nam = 'zero';
function log() {
  console.log(nam)
}

function wrapper() {
  nam = 'nero';
  log()
}
wrapper();  // nero

/* 
  스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다.
*/

var nam2 = 'zero';
function log2() {
  console.log(nam2)
}

function wrapper2() {
  var nam2 = 'nero';
  log2()
}
wrapper2(); // zero

/* 
  정적 스코프
  wrapper2 안에 선언된 nam2는 지역스코프로 적용된다.
  그리고 log2 함수가 호출되고 나서 호출된 지역에서 찾는것이 아니라 선언된 지역에서 찾는다. 선언된 지역에서는
  전역 변수로 선언된 nam2 의 zero를 찾기 때문에 zero 가 나오는 것!
*/