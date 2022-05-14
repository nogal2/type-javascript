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
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
