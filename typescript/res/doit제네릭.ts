function g1<T>(a:T): void {}
function g2<T, Q>(a:T, b:Q): void {}

const g3 = <T>(a:T): void => {}
const g4 = <T, Q>(a:T, b:Q): void => {}

type Type1Func<T> = (a: T) => void
type Type2Func<T, Q> = (a: T, b: Q) => void
type Type3Func<T,Q,R> = (a:T, b:Q) => R

type MapFunc<T, R> = (a:T) => R

type IdentityFunc<T> = MapFunc<T, T>

const numberIdentity: IdentityFunc<number> = (x: number): number => x
const stringIdentity: IdentityFunc<string> = (x: string): string => x
const objectIdentity: IdentityFunc<object> = (x: object): object => x
const arrayIdentity: IdentityFunc<any[]> = (x: any[]): any[] => x

// 제네릭 인터페이스 구문
interface IValuable<T> {
    value: T
}

// 제네릭 함수 구문
function identity<T>(arg: T): T {return arg}

// 제네릭 클래스 구문
class Valuable<T> implements IValuable<T> {
    constructor(public value: T) {}
}

const printValue = <T>(o: IValuable<T>): void => console.log(o.value);

printValue(new Valuable(1))
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>('hello'));
printValue(new Valuable<number[]>([1,2,3]));