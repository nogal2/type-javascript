type a = (a:number) => string
type b = (b:number) => string
const num = 123
const A:a = (a) => ''
let B:b = (a) => { 
    console.log(a) 
    return '';
}
B(num);