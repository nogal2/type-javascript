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