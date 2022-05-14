// 내 풀이
function solution(answers) {
  let answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstHuman = [];
  let secondHuman = [];
  let thirdHuman = [];

  for (let i = 1; i < 4; i++) {
    let questionNum = 0;
    let questionDivision = 0;
    switch (i) {
      case 1:
        {
          questionNum = answers.length % first.length;
          questionDivision = parseInt(answers.length / first.length);
          for (let i = 0; i < questionDivision; i++) {
            firstHuman = [...firstHuman, ...first];
          }
          if (questionNum !== 0) {
            for (let i = 0; i < questionNum; i++) {
              firstHuman.push(first[i]);
            }
          }
        }
        break;
      case 2:
        {
          questionNum = answers.length % second.length;
          questionDivision = parseInt(answers.length / second.length);
          for (let i = 0; i < questionDivision; i++) {
            secondHuman = [...secondHuman, ...second];
          }
          if (questionNum !== 0) {
            for (let i = 0; i < questionNum; i++) {
              secondHuman.push(second[i]);
            }
          }
        }
        break;
      case 3:
        {
          questionNum = answers.length % third.length;
          questionDivision = parseInt(answers.length / third.length);
          for (let i = 0; i < questionDivision; i++) {
            thirdHuman = [...thirdHuman, ...third];
          }
          if (questionNum !== 0) {
            for (let i = 0; i < questionNum; i++) {
              thirdHuman.push(third[i]);
            }
          }
        }
        break;
    }
  }

  const rightAnswer = [];
  rightAnswer[0] = firstHuman.filter((x, i) => x === answers[i]).length;
  rightAnswer[1] = secondHuman.filter((x, i) => x === answers[i]).length;
  rightAnswer[2] = thirdHuman.filter((x, i) => x === answers[i]).length;

  let max = Math.max(...rightAnswer);
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (rightAnswer[i] === max) count++;
  }
  if (count > 1) {
    for (let i = 0; i < 3; i++) {
      if (rightAnswer[i] === max) answer.push(i + 1);
    }
  } else {
    answer.push(rightAnswer.indexOf(max) + 1);
  }

  return answer;
}

// 다른사람 풀이
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
