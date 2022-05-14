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
function humanAnswer(questionNum, questionDivision, seq, human, answers) {
  questionNum = answers.length % seq.length;
  questionDivision = parseInt(answers.length / seq.length);
  for (let i = 0; i < questionDivision; i++) {
    human = [...human, ...seq];
  }
  if (questionNum !== 0) {
    for (let i = 0; i < questionNum; i++) {
      human.push(seq[i]);
    }
  }
}
let a = [];
const b = [6, 5, 7, 8, 9];

a = [...a, ...b];
console.log(a);
console.log(15 % 4);

const q = [1, 2, 3, 4, 5];
const w = [1, 2, 3, 4, 5];
q.filter((x, i) => console.log(i));

/* 
function aa() {
  let answers = [2, 1, 5, 6, 7, 5, 7, 4, 6, 7, 2, 4, 5, 6];
  let first = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firstHuman = [];
  let questionNum = 0;
  let questionDivision = 0;
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
  console.log(firstHuman);
}
aa();
 */
