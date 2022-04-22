function solution(lottos, win_nums) {
  let answer = new Array(2);

  let maximumCount = 0;
  let minimumCount = 0;
  const zeroCount = lottos.filter((num) => 0 === num).length;

  lottos.map((userNum) => {
    win_nums.map((lottoNum) => {
      if (userNum != 0 && userNum === lottoNum) {
        minimumCount++;
      }
    });
  });

  function convert(num) {
    if (num === 0 || num === 1) return 6;
    if (num === 2) return 5;
    if (num === 3) return 4;
    if (num === 4) return 3;
    if (num === 5) return 2;
    if (num === 6) return 1;
  }
  maximumCount = minimumCount + zeroCount;
  answer[0] = convert(maximumCount);
  answer[1] = convert(minimumCount);
  return answer;
}

function solution2(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;
  return [rank[maxCount], rank[minCount]];
}
