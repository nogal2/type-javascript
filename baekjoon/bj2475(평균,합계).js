const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const sum = input.map(val => val*val).reduce((result, value) => result+value)
const result = sum%10
console.log(result)