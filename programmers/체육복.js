// 내풀이 틀림;
function solution(n, lost, reserve) {
  let answer = 0;
  const newReserve = [];
  reserve.map((val) => {
    lost.includes(val) ? {} : newReserve.push(val);
  });

  if (lost[0] === 1) {
    lost.map((val) => {
      return newReserve.includes(val + 1) ? (answer += 1) : (answer = answer);
    });
  } else {
    lost.map((val) => {
      return newReserve.includes(val - 1) ? (answer += 1) : (answer = answer);
    });
  }

  if (answer === lost.length) {
    answer = n;
  } else {
    answer = n - answer;
  }

  return answer;
}

// 다른사람풀이

function solution(n, lost, reserve) {
  var answer = n - lost.length;
  // 처음 가능한 학생수 = n - lost.length
  // lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer++
  // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문

  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer += lost.length - realLost.length;

  realLost.sort((a, b) => a - b);

  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }

    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
}
