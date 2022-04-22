const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

if (input[1] >= 0 && input[1] <= 44 && input[0] != 0) {
  const hour = input[0] - 1;
  const min = input[1] + 15;
  console.log(hour + " " + min);
} else if (input[1] >= 45 && input[1] <= 59) {
  const hour = input[0];
  const min = input[1] - 45;
  console.log(hour + " " + min);
} else {
  const hour = input[0] + 23;
  const min = input[1] + 15;
  console.log(hour + " " + min);
}

let hour = Number(input[0]); // Hour
let minute = Number(input[1]); // Minute

minute -= 45;

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour + " " + minute);
