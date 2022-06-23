//  T에 속하지만 U에는 없는 타입을 구함.
// Exclude<T, U>
type A = number | string
type B = string
type C = Exclude<A, B>

// T의 타입 중 U에 할당할 수 있는 타입을 구한다.
// Extract<T, U>

type D = Extract<A, B>

// T에서 null과 undefined를 제외한 버전을 구한다.
// NonNullable<T>
type E = {a?: number | null}
type F = NonNullable<E['a']>

// 함수의 반환 타입을 구한다(제네릭과 오버로드된 함수에서는 동작하지 않는다).
// ReturnType<F>

type G = (a:number) => string
type H = ReturnType<G>

// 클래스가 생성자의 인스턴스 타입을 구한다.
// InstanceType<C>
type I = {new(): J}
type J = {b:number}
type K = InstanceType<I>