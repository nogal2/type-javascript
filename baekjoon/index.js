function solution(n, lost, reserve) {
  let answer = 0;

  lost.map((val) => {
    if(!reserve.includes(val)) {
      reserve.includes(val-1) ? answer += 1 : answer = answer
    } 
    else if(reserve.includes(val)) {
      
    }
  })
  return answer;
}