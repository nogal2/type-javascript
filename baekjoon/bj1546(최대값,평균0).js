const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const num = input[0] * 1
const score = input[1].split(' ')

const max = Math.max(...score)

const result = score.map(val => val/max*100).reduce((result, value) => result+value)
console.log(result/num)