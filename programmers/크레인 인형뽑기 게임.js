function solution(board, moves) {
  let answer = 0;
  let loopCount = 0;
  let pick = [];

  // 인형 뽑아 올리고 다른 배열로 옮김.
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        pick.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  // 같은 인형은 삭제.
  while (answer >= loopCount) {
    for (let i = 0; i < pick.length - 1; i++) {
      if (pick[i] === pick[i + 1]) {
        pick.splice(i, 2);
        answer = answer + 2;
        break;
      }
    }
    loopCount++;
  }
  return answer;
}
/*  let animals = [
  ["고양이", 1],
  ["강아지", 2],
  ["개구리", 3],
  ["개구리", 3],
];
console.log(animals.length);
console.log(animals[2][1]);
let b = 0;
let a = [1, 1, 3, 3, 4, 5, 86, 76];

console.log(b); 
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let a = 0;
let loopCount = 0;
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
//4 3 1 1 3 2 4
let pick = [];
for (let i = 0; i < moves.length; i++) {
  for (let j = 0; j < board.length; j++) {
    if (board[j][moves[i] - 1] > 0) {
      pick.push(board[j][moves[i] - 1]);
      board[j][moves[i] - 1] = 0;
      break;
    }
  }
}

while (a >= loopCount) {
  for (let i = 0; i < pick.length - 1; i++) {
    if (pick[i] === pick[i + 1]) {
      pick.splice(i, 2);
      a = a + 2;
      break;
    }
  }
  loopCount++;
}

console.log(pick);
console.log(a);
 */

// 다른사람 풀이
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
