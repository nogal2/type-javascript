const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const [a, b] =input
if(a > b) console.log('>')
if(a < b) console.log('<')
if(a === b)  console.log('==')