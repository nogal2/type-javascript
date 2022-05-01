function solution(board, moves) {
  let answer = 0;
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
  for (let i = 0; i < pick.length - 1; i++) {
    if (pick[i] === pick[i + 1]) {
      pick[i] = 0;
      pick[i + 1] = 0;
      answer++;
    }
  }
  return answer;
}
/* let animals = [
  ["고양이", 1],
  ["강아지", 2],
  ["개구리", 3],
  ["개구리", 3],
];
console.log(animals.length);
console.log(animals[2][1]);
let b = 0;
let a = [1, 1, 3, 3, 4, 5, 86, 76];

console.log(b); */
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let a = 0;
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

for (let i = 0; i < pick.length - 1; i++) {
  if (pick[i] === pick[i + 1]) {
    pick.splice(pick[i], 2);
    a++;
  }
}
console.log(pick);
console.log(a);
