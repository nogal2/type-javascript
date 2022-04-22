const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const first = Number(input[0].split("").reverse().join(""));
const second = Number(input[1].split("").reverse().join(""));

const result = first > second ? first : second;
console.log(result);
