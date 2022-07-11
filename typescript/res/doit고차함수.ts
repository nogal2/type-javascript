type FirstOrderFunc<T, R> = (a:T) => R
type SecondOrderFunc<T, R> = (a:T) => FirstOrderFunc<T, R>
type ThirdOrderFunc<T, R> = (a:T) => SecondOrderFunc<T, R>
const inc: FirstOrderFunc<number, number> = (x: number): number => x
console.log(inc(1));

const add: SecondOrderFunc<number, number> = (x: number): FirstOrderFunc<number, number> => (y:number): number => x + y
/* 
add는 SecondOrderFunc 타입이다. 매개변수 x는 number타입이며 FirstOrderFunc를 반환한다. FirstOrderFunc는 number를 매개변수로 받고 number 를 반환한다.
그래서 최종 반환 은 x+y이다.
*/
console.log(add(1)(2));

const add3: ThirdOrderFunc<number, number> = 
    (x:number):SecondOrderFunc<number, number> => 
    (y:number): FirstOrderFunc<number, number> => 
    (z:number): number => x+y+z

console.log(add3(1)(2));

const add1: SecondOrderFunc<number, number> = add(1)
console.log(add1(2));