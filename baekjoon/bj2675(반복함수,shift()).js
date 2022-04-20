const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const num1 = input.shift()

for (let i=0; i<num1; i++) {
    let answer = ''

    const [num2, str] = input[i].split(' ')
    for(let j=0; j<str.length; j++) {
        answer += str[j].repeat(num2)
    }
    console.log(answer)
}