const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(val => Number(val))

const num = String(input[0]*input[1]*input[2])
let count = [0,0,0,0,0,0,0,0,0,0]
for(let i=0; i<count.length; i++) {
    count[Number(num[i])]++  
}

for(let i=0; i<count.length; i++) {
    console.log(count[i])
}