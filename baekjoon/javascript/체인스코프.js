// 체인스코프
var nam = 'zero';
function outer() {
  console.log('외부', nam);
  function inner() {
    var enemy = 'nero'
    console.log('내부', nam);
  }
  inner();
}
outer();
console.log(enemy); // undefined
/* 
  가장 내부 범위 스코프부터 찾아서 가장 넓은 범위까지 찾는 것이 체인스코프
  만약 찾았으면 더이상 찾지 않음.
*/