// 내 풀이
function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    absolutes[i] = signs[i] ? absolutes[i] : -absolutes[i];
  }

  const answer = absolutes.reduce((prev, curr) => prev + curr);

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));

// 다른 사람 풀이
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
