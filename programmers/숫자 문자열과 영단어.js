// 내 풀이
function solution(s) {
  let answer = s;

  // prettier-ignore
  const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let i = 0; i < arr.length; i++) {
    let regex = new RegExp(arr[i], "g");
    answer = answer.replace(regex, i);
  }

  const result = parseInt(answer);
  return result;
}

// 다른사람풀이
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
