const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
/* const input = [
  "14",
  "push 1",
  "push 2",
  "top",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "top",
]; */

const numbers = parseInt(input[0]);
const stack = [];
const result = [];
//const command = ["push", "pop", "size", "empty", "top"];
for (let i = 1; i < numbers + 1; i++) {
  /*if (!command.includes(input[i])) {
    const result = input[i].split(" ");
    stack.push(Number(result[1]));
  } */
  switch (input[i]) {
    case "pop":
      {
        if (stack.length === 0) result.push(-1);
        else result.push(stack.pop());
      }
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;

    case "top":
      {
        if (stack.length === 0) result.push(-1);
        else result.push(stack[stack.length - 1]);
      }
      break;

    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}
console.log(result.join("\n"));
