/* const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().toLowerCase().split('')
//const input = "asefhntasea".toLowerCase().split('')
const count = new Array(input.length)
for(let i=0; i < input.length-1; i++) {
    for(let j=i+1; j < input.length; j++) {
        if(input[i] = input[j]) count[i] +1
    }
}
let max = input[0]
for(let i=0; i<input.length; i++) {
    if(max < input[i]) max = input[i]
}
const result = () => {
    for(let i=0; i < count.length-1; i++) {
        for(let j=i+1; j < count.length; j++) {
            if(count[i] = count[j]) return '?'
        }
    }
}
console.log(result) */

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().toLowerCase()
//const input = "asefhntasea".toLowerCase()

const result = new Array(26).fill(0)    // fill (value, start, end) start는 시작 인덱스(기본값0), end는 끝 인덱스 기본값은 배열의 길이.

for(let i=0; i<input.length; i++) {
    result[input.charCodeAt(i)-97] ++
}

const max = Math.max(...result)
const index = result.indexOf(max)

let isSame = false

for (let j=0; j<26; j++) {
    if(result[j] === max && index != j) {
        isSame = true
        break
    }
}

console.log(isSame ? "?" : String.fromCharCode(index+65))