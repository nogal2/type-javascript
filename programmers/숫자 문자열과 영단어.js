// 내 풀이
function solution(s) {
  let answer = s;

  // prettier-ignore
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let i = 0; i < numbers.length; i++) {
    let regex = new RegExp(numbers[i], "g");
    answer = answer.replace(regex, i);
  }

  const result = parseInt(answer);
  return result;
}

// 배울만한 사람 풀이
function solution(s) {
  // prettier-ignore
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

let a = ["zero", "zero"];
const aa = a.join(0);
console.log(aa);
