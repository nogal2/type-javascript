// 내 풀이
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    const excluNumbers = numbers.includes(i);
    excluNumbers ? answer : (answer += i);
    console.log("i " + answer);
  }
  return answer;
}

const n = [1, 2, 3, 4, 6, 7, 8, 0];
let b = 0;
for (let i = 0; i < 10; i++) {
  const excluNumbers = n.includes(i);
  excluNumbers ? b : (b += i);
  console.log("i " + b);
}

// 다른사람풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
