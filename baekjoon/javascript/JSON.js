let example = {
    "stringifyMe": "please",
    "andParseMe": "thankYou"
};

let string = JSON.stringify(example);
let parsed = JSON.parse(string);
console.log(string)
console.log(parsed)
    
/* 
    JSON(JavaScript Object Notation)
    stringify: JSON 데이터를 서버를 통해서 전송할때 사용.
    parse: 서버에서 돌려 받을 때 문자열이 왔다면 다시 JSON객체로 바꿔줌.
*/

let obj = {test: 'yes'};
let obj2 = JSON.parse(JSON.stringify(obj)); // 얕은 복사
console.log(obj2);

// https://www.zerocho.com/category/JavaScript/post/57432adfa48729787807c3fb