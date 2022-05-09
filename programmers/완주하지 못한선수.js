// 정답 아닌 내 풀이
function solution(participant, completion) {
  let answer = "";
  const dup = isDuplicate(participant);
  if (dup === false) {
    // 동명이인 없음
    participant.map((val) => {
      if (!completion.includes(val)) answer = val;
    });
  } else {
    // 동명이인이 있음
    // prettier-ignore
    for (let i = 0; i < participant.length; i++) {
      if (participant.indexOf(participant[i]) !== participant.lastIndexOf(participant[i])) { // 현재 val이 동명이인 이라면
        if (completion.includes(participant[i])) { // 동명이인 중 한 명만 완주 했을 경우
          answer = participant[i]; 
          break;
        }
        if (!completion.includes(participant[i])) {
          answer = participant[i];
          break;
        }
      }
    }
  }

  return answer;
}

const isDuplicate = (arr) => {
  const isDup = arr.some((x) => {
    return arr.indexOf(x) !== arr.lastIndexOf(x);
  });
  return isDup;
};

// 정답
function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}
